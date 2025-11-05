import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface RegisterRequest {
  email: string;
  contraseña: string;
  nombre: string;
  apellido: string;
  direccion: string;
  celular: string;
  rol: string;
}

@Injectable({
  providedIn: 'root'
})
export class Register {
  
  private http = inject(HttpClient); 
  url = 'http://localhost:5000'; 


  register(dataRegistro: RegisterRequest): Observable<any> { 
    return this.http.post(this.url + '/auth/register', dataRegistro);
  }
}