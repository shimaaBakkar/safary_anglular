import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DriverDashboardService {


  constructor(private http:HttpClient){}

  getDriverDashboaedtlist(): Observable <any>{
    
    return this.http.get("http://localhost:8000/api/hotels")
  
  }
  

  
  CreateDriverTasks(model: any){
    return this.http.post("http://localhost:8000/api/userRegistrations",model);
    
  }
  
  UpdateDriverTasks(model: any , id: any){
    return this.http.put(`http://localhost:8000/api/userRegistrations/${id}`,model);
    
  }
  
  deleteDriverTasks(id : any ){
    return this.http.delete(`http://localhost:8000/api/userRegistrations/${id}`);
    
  }
  
}
