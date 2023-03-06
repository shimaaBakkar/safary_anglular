import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
  
// if( localStorage.getItem('type')==  "tourguide"){

  // })
// }
// if(request.url.includes('userRegistrations')){
  
// }
// if(request.url.includes('hotelOwnerRegistrations')){
  
// }
// if(request.url.includes('tourgideRegistrations')){
  
// }

    const newRequest = request.clone({
      headers:request.headers.append('Authorization','Bearer' + localStorage.getItem('token'))
    }
   )
   
    return next.handle(newRequest);
  }
}
