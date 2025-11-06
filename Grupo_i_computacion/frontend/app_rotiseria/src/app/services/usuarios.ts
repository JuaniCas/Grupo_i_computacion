import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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

  getUsuarios(filtros: any): Observable<any>{

    let headers = this.getAuthHeaders();
    let params = new HttpParams();

    if (filtros.rol) {
      params = params.append('rol', filtros.rol);
    }

    if (filtros.page) {
      params = params.append('page', filtros.page);
    }

    if (filtros.per_page) {
      params = params.append('per_page', filtros.per_page);
    }

    return this.http.get(this.url + '/usuarios', {
      headers: this.getAuthHeaders(),
      params: params
    });
  }

  getUsuario(id: string): Observable<any>{
    
    return this.http.get(this.url + '/usuario/' + id, {
     headers: this.getAuthHeaders()
    });
  }

  crearUsuario(data: any): Observable<any>{
    return this.http.post(this.url + '/usuarios', data, {
      headers: this.getAuthHeaders()
    });
  }

  actualizarUsuario(id: string, data: any): Observable<any>{
    return this.http.put(this.url + '/usuario/' + id, data, {
      headers: this.getAuthHeaders()
    });
  }

  eliminarUsuario(id: string): Observable<any>{
    return this.http.delete(this.url + '/usuario/' + id, {
      headers: this.getAuthHeaders()
    });
  }

}
