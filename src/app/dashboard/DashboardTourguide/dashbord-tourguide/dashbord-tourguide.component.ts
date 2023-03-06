import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { TourguideDashboard } from '../context/TourguideDashboardDTO';
import { TouguideDashboardService } from '../services/touguide-dashboard.service';

@Component({
  selector: 'app-dashbord-tourguide',
  templateUrl: './dashbord-tourguide.component.html',
  styleUrls: ['./dashbord-tourguide.component.css']
})
export class DashbordTourguideComponent {


  AllDashbourdTourguide: Array <TourguideDashboard>=[];

constructor(private router:Router,
  // private TourguideService: TourguideService,
  private TouguideDashboardService:TouguideDashboardService,
  private toaster: ToastrService,
  private spinner: NgxSpinnerService, ){}

 ngOnInit(): void {
  //  this.GetAllUsers();
 }


// =========================================================================
GetAllTourguide(){   
  this.spinner.show();
this.TouguideDashboardService.getTourguideDashtlist().subscribe(
 res=>{ 
   this.spinner.hide();
   this.AllDashbourdTourguide = res } )
}
// =================================================================

deleteUser(id : any){
  this.spinner.show();
  this.TouguideDashboardService.deleteTourguideDashtlist(id).subscribe(
    res => {
      this.spinner.hide()
      this.GetAllTourguide()
    },error=>{
      this.toaster.error(error.error.massage)
      this.spinner.hide()
    }
  )
}




}
