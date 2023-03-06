import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { HotelownerService } from 'src/app/services/login/hotelowner.service';
import { HotelOwnerDashboard } from '../context/HotelOwnerDashboardDTO';
import { HotelOwnerDashboardService } from '../services/hotel-owner-dashboard.service';

@Component({
  selector: 'app-dashbord-hotel-ownwr',
  templateUrl: './dashbord-hotel-ownwr.component.html',
  styleUrls: ['./dashbord-hotel-ownwr.component.css']
})
export class DashbordHotelOwnwrComponent {
  

    DashboardOwnerList: Array <HotelOwnerDashboard>=[];

    constructor(private router:Router
      ,private HotelOwnerDashboardService:HotelOwnerDashboardService,
      private HotelOwnwerService:HotelownerService,
      private toaster: ToastrService,
      private spinner: NgxSpinnerService, ){}
    
      ngOnInit(): void {
  //  
       }

 //  ========================================================================
    GetHotelList(){
      this.spinner.show();
      this.HotelOwnerDashboardService.getHotelOwnerDashList().subscribe(
        res=>{ 
          this.spinner.hide();
          this.DashboardOwnerList = res }
          )
    }   
    GetRoomList(){
      this.spinner.show();
      this.HotelOwnerDashboardService.getHotelOwnerDashList().subscribe(
        res=>{ 
          this.spinner.hide();
          this.DashboardOwnerList = res } )
    }  
      
// ============================================================================

deleteRoom(id : any){
  this.spinner.show();
  this.HotelOwnerDashboardService.deleteHotelOwnerDash(id).subscribe(
    res => {
      this.spinner.hide()
      this.GetRoomList()
    },error=>{
      this.toaster.error(error.error.massage)
      this.spinner.hide()
    }
  )
}

// deleteHotel(id : any){
//   this.spinner.show();
//   this.OurUsersService.deleteUser(id).subscribe(
//     res => {
//       this.spinner.hide()
//       this.GetAllUsers()
//     },error=>{
//       this.toaster.error(error.error.massage)
//       this.spinner.hide()
//     }
//   )
// }


}


// ممكن يمسح الروووووووووووووووم من الهوتل  فانا محتاجة 
// api room 
// api Hotel