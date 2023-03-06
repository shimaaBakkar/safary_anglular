import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-custom-trip-details',
  templateUrl: './custom-trip-details.component.html',
  styleUrls: ['./custom-trip-details.component.css']
})
export class CustomTripDetailsComponent {
  newForm:FormGroup;



//   order_info: {
//     user_id: number,
//     budget: number;
//     check_in: string;
//     check_out: string;
//     n_of_adults: number,
//     n_of_childeren: number,
//     n_of_days: number,

//     "id": number,
// },
// message: "string"


  constructor(
    private toaster: ToastrService,
    private spinner: NgxSpinnerService,
    private router :Router,
    private budgetServices: BudgetService
    ) {
     
    this.newForm = new FormGroup({

      budget: new FormControl("", [ Validators.required]),
      check_in: new FormControl("", [ Validators.required]),
      check_out: new FormControl("", [ Validators.required]),
      n_of_adults: new FormControl("", [ Validators.required]),
      n_of_childeren: new FormControl("", [ Validators.required]),
      n_of_days: new FormControl("", [ Validators.required]),
   
    });
  }


  
submitForm() {
  this.spinner.show()
  // console.log(this.newForm.value)

  let model = this.prepareFormData()
  // console.log(model) 
 
  this.budgetServices.CreateBudget(model).subscribe(res=>{
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
