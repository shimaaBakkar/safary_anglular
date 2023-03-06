import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateUsers } from 'src/app/dashboard/admin/context/UsersDTOs';
import { User } from 'src/app/interfaces/auth/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  // Login(model:User){
  //   return this.http.post("http://localhost:8000/api/userRegistrations",model);
  // }
  
  GetUsers():Observable <any> {
  //   let headers =new HttpHeaders();
  //  headers = headers.append('Authorization','Bearer'+localStorage.getItem('token'))
    return this.http.get("http://localhost:8000/api/hotels");
  }

  CreateUsers(model: any){
    return this.http.post("http://localhost:8000/api/userRegistrations",model);
    
  }

  deleteUser(id : any ){
    return this.http.delete(`http://localhost:8000/api/userRegistrations/${id}`);
    
  }
  
}
