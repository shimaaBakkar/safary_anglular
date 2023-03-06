import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Trip } from 'src/app/interfaces/trip';
import { TripService } from 'src/app/services/trip.service';

@Component({
  selector: 'app-trip-edit-form',
  templateUrl: './trip-edit-form.component.html',
  styleUrls: ['./trip-edit-form.component.css']
})
export class TripEditFormComponent {


  TripList :Array <Trip> =[]; 



  // =================================form==========================================
  fileName="";
  fileimages=[];
newForm: FormGroup;
constructor(
  private toaster: ToastrService,
  private spinner: NgxSpinnerService,
  private router :Router,
  private TripsService: TripService , 
  ) {

  this.newForm = new FormGroup({

    description: new FormControl("", [ Validators.required ]),
    price: new FormControl("", [Validators.required ]),
    cover_img: new FormControl('', [Validators.required ]),
    n_of_people: new FormControl('',[Validators.required]),
    n_of_places: new FormControl('',[Validators.required]),
    num_of_days:new FormControl('',[Validators.required]),
    image:new FormControl([],[Validators.required]),
  });
  }
// ============================================================================

selectImage(event : any){
  this.fileName = event.target.value;
  this.newForm.get('image')?.setValue(event.target.file[0])
  console.log(event)
}

selectImages(event : any){
  this.fileName = event.target.value;
  this.newForm.get('image')?.setValue(event.target.file)
  console.log(event)
}
// ============================================================================
submitForm() {
this.spinner.show()
// console.log(this.newForm.value)
// let id = this.prepareFormData().
let model = this.prepareFormData()
// console.log(model) 

this.TripsService.UpdateTrip(model, this.newForm.controls['name'] ).subscribe(res=>{
  this.toaster.success("Success","Success")
  // this.router.navigate(['admin'])
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
