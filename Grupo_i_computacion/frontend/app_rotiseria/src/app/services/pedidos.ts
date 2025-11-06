import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  
  private http = inject(HttpClient);
  url = 'http://localhost:5000';

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token') || '';
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': `Bearer ${token}`
    });
  }

  getPedidos(filtros: any): Observable<any> {
    
    let params = new HttpParams();

    if (filtros.page) {
      params = params.append('page', filtros.page);
    }

    return this.http.get(this.url + '/pedidos', { 
      headers: this.getAuthHeaders(),
      params: params 
    });
  }

  getPedido(id: string): Observable<any> {
    return this.http.get(this.url + `/pedido/${id}`, { 
      headers: this.getAuthHeaders()
    });
  }

  crearPedido(data: any): Observable<any> {
    return this.http.post(this.url + '/pedidos', data, {
      headers: this.getAuthHeaders()
    });
  }

  actualizarPedido(id: string, data: any): Observable<any> {
    return this.http.put(this.url + `/pedido/${id}`, data, {
      headers: this.getAuthHeaders()
    });
  }

  eliminarPedido(id: string): Observable<any> {
    return this.http.delete(this.url + `/pedido/${id}`, {
      headers: this.getAuthHeaders()
    });
  }

}