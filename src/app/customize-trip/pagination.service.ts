import { Injectable } from '@angular/core';
const endpoint = 'https://jsonplaceholder.typicode.com/pagination';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  constructor() { }
}

// export class PostService {
//   constructor(private http: HttpClient) {}
//   getAllPosts(): Observable<any> {
//     return this.http.get(endpoint);
//   }
// }