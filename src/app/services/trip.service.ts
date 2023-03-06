import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TripService {


  constructor(private http:HttpClient){}

  


  getTriptlist(): Observable <any>{
    return this.http.get("https://fakestoreapi.com/products")
  
  }
  
  getTripDetails( id: any): Observable <any>{
    return this.http.get(`https://fakestoreapi.com/products/${id}` )
  }


  CreateTrip(model: any){
    return this.http.post("http://localhost:8000/api/userRegistrations",model);
    
  }

  UpdateTrip(model: any , id: any){
    return this.http.put(`http://localhost:8000/api/userRegistrations/${id}`,model);
    
  }

  deleteTrip(id : any ){
    return this.http.delete(`http://localhost:8000/api/userRegistrations/${id}`);
    
  }
}
