import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-layout',
  templateUrl: './register-layout.component.html',
  styleUrls: ['./register-layout.component.css']
})
export class RegisterLayoutComponent {
 
  constructor(private router: Router) {

  }
  change(role: string) {
    switch (role) {
      case "user":
        this.router.navigateByUrl("/register/user-reg");
        break;
      case "driver":
        this.router.navigateByUrl("/register/driver-reg");
        break;
      case "tourguide":
        this.router.navigateByUrl("/register/tourgideReg-reg");
        break;
      case "hotel":
        this.router.navigateByUrl("/register/hotelOwner-reg");
        break;

    }

  }
}
