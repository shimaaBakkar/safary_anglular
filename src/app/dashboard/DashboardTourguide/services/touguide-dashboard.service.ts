import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TouguideDashboardService {

  constructor(private http:HttpClient){}

  getTourguideDashtlist(): Observable <any>{
    
    return this.http.get("http://localhost:8000/api/hotels")
  
  }
  

  
  CreateTourguideDashtlist(model: any){
    return this.http.post("http://localhost:8000/api/userRegistrations",model);
    
  }
  
  UpdateTourguideDashtlist(model: any , id: any){
    return this.http.put(`http://localhost:8000/api/userRegistrations/${id}`,model);
    
  }
  
  deleteTourguideDashtlist(id : any ){
    return this.http.delete(`http://localhost:8000/api/userRegistrations/${id}`);
    
  }
  
}
