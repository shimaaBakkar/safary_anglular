import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TourguideService {

  constructor(private http:HttpClient){}

  getTourGuidetlist(): Observable <any>{
    return this.http.get("https://fakestoreapi.com/products")
  
  }
  
  getTourGuideDetails( id: any): Observable <any>{
    return this.http.get(`https://fakestoreapi.com/products/${id}` )
  }
}
