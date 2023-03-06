import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  constructor(private http:HttpClient) { }

   
  GetUserDrivirs():Observable <any> {
    //   let headers =new HttpHeaders();
    //  headers = headers.append('Authorization','Bearer'+localStorage.getItem('token'))
      return this.http.get("http://localhost:8000/api/hotels");
    }
  
    CreateDrivers(model: any){
      return this.http.post("http://localhost:8000/api/userRegistrations",model);
      
    }
  
    deleteDrivers(id : any ){
      return this.http.delete(`http://localhost:8000/api/userRegistrations/${id}`);
      
    }
}
