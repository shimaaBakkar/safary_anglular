import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class HotelService {

  constructor(private http:HttpClient) {}

    getHotelList() : Observable <any> {
      
      return this.http.get("https://fakestoreapi.com/products")
    }
    getHoteDetails( id: any): Observable <any>{
      return this.http.get(`https://fakestoreapi.com/products/${id}` )
    }

   }

