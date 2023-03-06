import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tourguide } from '../../interfaces/tourguide';

@Injectable({
  providedIn: 'root'
})
export class TourguideService {


  constructor(private http:HttpClient){}

  CreateTourguide(model: any){
    return this.http.post("http://localhost:8000/api/userRegistrations",model);
    
  }
  getTourGuidetlist(): Observable <any>{
    return this.http.get("https://fakestoreapi.com/products")
  
  }
  
  getTourGuideDetails( id: any): Observable <any>{
    return this.http.get(`https://fakestoreapi.com/products/${id}` )
  }

  deleteTourguide(id : any ){
    return this.http.delete(`http://localhost:8000/api/userRegistrations/${id}`);
    
  }
}
