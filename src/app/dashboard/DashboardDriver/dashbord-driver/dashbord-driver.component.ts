import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { DriverService } from 'src/app/services/login/driver.service';
import { DriverDashboard } from '../context/DriverDashboardDTO';
import { DriverDashboardService } from '../services/driver-dashboard.service';

@Component({
  selector: 'app-dashbord-driver',
  templateUrl: './dashbord-driver.component.html',
  styleUrls: ['./dashbord-driver.component.css']
})
export class DashbordDriverComponent {
 
 
  AllDashbourdDriver: Array <DriverDashboard>=[];

constructor(private router:Router,
  private DriverService:DriverService,
  private DriverDashboardService:DriverDashboardService,
  private toaster: ToastrService,
  private spinner: NgxSpinnerService, ){}

 ngOnInit(): void {
  //  this.GetAllUsers();
 }


// =========================================================================
GetAllTourguidedashbourd(){   
  this.spinner.show();
this.DriverDashboardService.getDriverDashboaedtlist().subscribe(
 res=>{ 
   this.spinner.hide();
   this.AllDashbourdDriver = res } )
}
// =================================================================

deleteUser(id : any){
  this.spinner.show();
  this.DriverDashboardService.deleteDriverTasks(id).subscribe(
    res => {
      this.spinner.hide()
      this.GetAllTourguidedashbourd()
    },error=>{
      this.toaster.error(error.error.massage)
      this.spinner.hide()
    }
  )


}
}
