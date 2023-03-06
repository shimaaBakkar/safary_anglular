import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { DriverService } from 'src/app/services/login/driver.service';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent {

  
  fileName="";
  newForm: FormGroup;
  constructor(
    private toaster: ToastrService,
    private spinner: NgxSpinnerService,
    private router :Router,
    private DriverService: DriverService
    ) {
     
    this.newForm = new FormGroup({

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
      gender: new FormControl('',[Validators.required]),
      image: new FormControl('',[Validators.required]),
  

      License:new FormControl('',[Validators.required]),
    });
  }

  selectImage(event : any){
    this.fileName = event.target.value;
    this.newForm.get('image')?.setValue(event.target.file[0])
    console.log(event)
  }

submitForm() {
  this.spinner.show()
  // console.log(this.newForm.value)

  let model = this.prepareFormData()
  // console.log(model) 
 
  this.DriverService.CreateDrivers(model).subscribe(res=>{
    this.toaster.success("Success","Success")
    this.router.navigate(['admin'])
  },error => {
    this.spinner.hide()
    console.log(this.newForm.value)
    // console.log(error)
    this.toaster.error(error.error.message)
  }
  ) 
    }

    prepareFormData(){
      let formData= new FormData()
      Object.entries(this.newForm.value).forEach( ([key , value] :  any)=>{
formData.append(key , value)
      })

console.log(this.newForm.value)
      return formData
    }

}
