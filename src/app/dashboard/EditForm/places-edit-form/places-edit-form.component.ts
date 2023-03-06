import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Places } from 'src/app/interfaces/places';
import { PlacesService } from 'src/app/services/places.service';


@Component({
  selector: 'app-places-edit-form',
  templateUrl: './places-edit-form.component.html',
  styleUrls: ['./places-edit-form.component.css']
})
export class PlacesEditFormComponent {

  PlacesList :Array <Places> =[]; 



  // =================================form==========================================
  fileName="";
  fileimages=[];
newForm: FormGroup;
constructor(
  private toaster: ToastrService,
  private spinner: NgxSpinnerService,
  private router :Router,
  private PlacesService: PlacesService , 
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

let model = this.prepareFormData()
// console.log(model) 

this.PlacesService.Updateplaces(model,this.newForm.controls['Place_id']).subscribe(res=>{
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

