
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelOwnerDashboardService {

  constructor(private http:HttpClient){}

  getHotelOwnerDashList(): Observable <any>{
    
    return this.http.get("http://localhost:8000/api/hotels")
  
  }

  
  CreateHotelOwnerDash(model: any){
    return this.http.post("http://localhost:8000/api/userRegistrations",model);
    
  }
  
  UpdateHotelOwnerDash(model: any , id: any){
    return this.http.put(`http://localhost:8000/api/userRegistrations/${id}`,model);
    
  }
  
  deleteHotelOwnerDash(id : any ){
    return this.http.delete(`http://localhost:8000/api/userRegistrations/${id}`);
    
  }
  
}
