import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  
  private http = inject(HttpClient);

  url = 'http://localhost:5000';

  login(dataLogin:LoginRequest): Observable<any>{
    return this.http.post(this.url + '/auth/login', dataLogin).pipe(
      tap ((response: any) => {
        if (response && response.access_token) {
          const tokenDecodificado: any = jwtDecode(response.access_token);

          localStorage.setItem('token', response.access_token);
          localStorage.setItem('rol', tokenDecodificado.rol);
          localStorage.setItem('id_usuario', tokenDecodificado.id);
        }
      })
    );
  }

  getUserRole(): string | null {
    return localStorage.getItem('rol');
  }

}