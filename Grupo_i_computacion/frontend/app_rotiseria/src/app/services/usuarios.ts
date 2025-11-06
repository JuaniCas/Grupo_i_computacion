import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Usuarios {
  
  private http = inject(HttpClient);

  url = 'http://localhost:5000';

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token') || '';
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': `Bearer ${token}`
    });
  }

  getUsuarios(): Observable<any>{
    const token = localStorage.getItem('token') || '';
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': `Bearer ${token}`
    });
    return this.http.get(this.url + '/usuarios', { headers: headers });
  }

  getUsuario(id: string): Observable<any>{
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': `Bearer ${token}`
    });
    return this.http.get(this.url + '/usuario/' + id, { headers: headers });
  }

  crearUsuario(data: any): Observable<any>{
    return this.http.post(this.url + '/usuarios', data, { headers: this.getAuthHeaders() });
  }

  actualizarUsuario(id: string, data: any): Observable<any>{
    return this.http.put(this.url + '/usuario/' + id, data, { headers: this.getAuthHeaders() });
  }

}
