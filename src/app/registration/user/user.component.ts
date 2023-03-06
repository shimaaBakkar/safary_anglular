import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { User, UserResponse } from 'src/app/interfaces/auth/user';
import { UserService } from 'src/app/services/login/user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {



  RegForm: FormGroup



  constructor(private userlogin: UserService, 
    private toaster: ToastrService,
    private router :Router,
    private spinner: NgxSpinnerService
    ) {

    this.RegForm = new FormGroup({

      name: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15)
      ]),


      email: new FormControl("", [Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
      ]),

      password: new FormControl('', [Validators.required,
      Validators.pattern('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[#$^+=!*()@%&]).{8,16}$')
      ]),

      // RegConfirm: new FormControl('', [Validators.required, this.confirmpass])
      gender: new FormControl('female'),
      image: new FormControl('image.png'),
      user_type: new FormControl('1')
    });
  }


  submitForm() {
    console.log(this.RegForm.value)
    // this.router.navigate(["AswanTrip"])
  }



  LoginUser() {
    this.spinner.show();
    this.userlogin.CreateUsers(this.RegForm.value).subscribe(
      (res:any)=> {
        localStorage.setItem('token',res.token)
        this.toaster.success("Success", "Login Success")
        //if condition admin/user...
        // this.router.navigate(["dashboard/dashboard/admin"])
        this.spinner.hide();
      },
      error => {
        this.toaster.error(error.error)
      }
    )
    this.spinner.hide();
  }
}
