import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transport } from '../interfaces/transport';


@Injectable({
  providedIn: 'root'
})
export class TransportService {

  constructor(private http:HttpClient){}

  CreateTransport(model : any){
    return this.http.post("http://localhost:8000/api/userRegistrations",model);
  }
 

  getTransporttlist(): Observable <any>{
    return this.http.get("https://fakestoreapi.com/products")
  
  }
  
  getTransportDetails( id: any): Observable <any>{
    return this.http.get(`https://fakestoreapi.com/products/${id}` )
  }

  deleteTransport(id : any ){
    return this.http.delete(`http://localhost:8000/api/userRegistrations/${id}`);
    
  }
}
