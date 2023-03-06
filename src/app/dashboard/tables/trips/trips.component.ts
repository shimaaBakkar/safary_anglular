import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Trip } from 'src/app/interfaces/trip';
import { TripService } from 'src/app/services/trip.service';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent {

      TripList :Array <Trip> =[]; 



  
constructor(
  private toaster: ToastrService,
  private spinner: NgxSpinnerService,
  private router :Router,
  private TripsService: TripService , 
  ) {}
   
 
// ============================================================================
    
    ngOnInit(): void {
      this.Triplist();
    }

   Triplist(){
     this.TripsService.getTriptlist().subscribe(
       res=>{ 
         this.TripList = res } )
   }
   
   deleteTrip(id : any){
     this.spinner.show();
     this.TripsService.deleteTrip(id).subscribe(
       res => {
         this.spinner.hide()
         this.Triplist()
       },error=>{
         this.toaster.error(error.error.massage)
         this.spinner.hide()
       }
     )
}





}
