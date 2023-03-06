import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Places } from 'src/app/interfaces/places';
import { PlacesService } from 'src/app/services/places.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})

export class PlacesComponent {
  constructor(private router:Router
    ,private PlacesService: PlacesService,
    private toaster: ToastrService,
    private spinner: NgxSpinnerService, ){}
  

    PlaceList :Array <Places> =[]; 

    ngOnInit(): void {
      this.GetPlaces();
    }


    GetPlaces(){
      this.PlacesService.getplacestlist().subscribe(
        res=>{ 
          this.PlaceList = res } )
    }
    
    deletePlaces(id : any){
      this.spinner.show();
      this.PlacesService.deletePlace(id).subscribe(
        res => {
          this.spinner.hide()
          this.GetPlaces()
        },error=>{
          this.toaster.error(error.error.massage)
          this.spinner.hide()
        }
      )
    }
}
