import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http:HttpClient) { }


  getrequest() : Observable <any> {
      
    return this.http.get("https://fakestoreapi.com/products")
  }

  deleteRequest(id : any ){
    return this.http.delete(`http://localhost:8000/api/userRegistrations/${id}`);
    
  }
}
