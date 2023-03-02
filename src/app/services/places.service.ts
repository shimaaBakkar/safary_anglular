import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

constructor(private http:HttpClient){}

getplacestlist(): Observable <any>{
  return this.http.get("localhost:8000/api/hotels")

}

getplacesDetails( id: any): Observable <any>{
  return this.http.get(`https://fakestoreapi.com/products/${id}` )
}
}


