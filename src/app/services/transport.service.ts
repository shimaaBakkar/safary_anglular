import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransportService {

  constructor(private http:HttpClient){}

  getTransporttlist(): Observable <any>{
    return this.http.get("https://fakestoreapi.com/products")
  
  }
  
  getTransportDetails( id: any): Observable <any>{
    return this.http.get(`https://fakestoreapi.com/products/${id}` )
  }
}
