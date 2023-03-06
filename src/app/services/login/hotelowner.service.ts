import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelownerService {


  constructor(private http:HttpClient) { }

   
  GetUserHotelOwner():Observable <any> {
    //   let headers =new HttpHeaders();
    //  headers = headers.append('Authorization','Bearer'+localStorage.getItem('token'))
      return this.http.get("http://localhost:8000/api/hotels");
    }
  
    CreateHotelOwner(model: any){
      return this.http.post("http://localhost:8000/api/userRegistrations",model);
      
    }
  
    deleteHotelOwner(id : any ){
      return this.http.delete(`http://localhost:8000/api/userRegistrations/${id}`);
      
    }
}
