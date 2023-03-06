import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

constructor(private http:HttpClient){}

getplacestlist(): Observable <any>{
  
  return this.http.get("http://localhost:8000/api/hotels")

}

getplacesDetails( id: any): Observable <any>{
  return this.http.get(`https://fakestoreapi.com/products/${id}` )
}

Createplaces(model: any){
  return this.http.post("http://localhost:8000/api/userRegistrations",model);
  
}

Updateplaces(model: any , id: any){
  return this.http.put(`http://localhost:8000/api/userRegistrations/${id}`,model);
  
}

deletePlace(id : any ){
  return this.http.delete(`http://localhost:8000/api/userRegistrations/${id}`);
  
}


}


