import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
// import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'


@Injectable({
  providedIn: 'root'
})

export class RegisterService {
    private _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

    // Inject HttpClient, not Http
    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
           return this.http.post('http://localhost:56451/map',
              { username, password },
              this._options);
    }
}