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




    CreateHotels(model: any){
      return this.http.post("http://localhost:8000/api/userRegistrations",model);
      
    }
  
    deleteHotels(id : any ){
      return this.http.delete(`http://localhost:8000/api/userRegistrations/${id}`);
      
    }
   }

