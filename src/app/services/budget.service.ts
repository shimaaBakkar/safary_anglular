import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {


  constructor(private http:HttpClient) { }

  // Login(model:User){
  //   return this.http.post("http://localhost:8000/api/userRegistrations",model);
  // }
  
  GetBudget():Observable <any> {
  //   let headers =new HttpHeaders();
  //  headers = headers.append('Authorization','Bearer'+localStorage.getItem('token'))
    return this.http.get("http://localhost:8000/api/hotels");
  }

  CreateBudget(model: any){
    return this.http.post("http://localhost:8000/api/userRegistrations",model);
    
  }


}
