import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderdetailsService {


  constructor(private http:HttpClient) { }


  getOrders() : Observable <any> {
      
    return this.http.get("https://fakestoreapi.com/products")
  }

  deleteOrder(id : any ){
    return this.http.delete(`http://localhost:8000/api/userRegistrations/${id}`);
    
  }



}
