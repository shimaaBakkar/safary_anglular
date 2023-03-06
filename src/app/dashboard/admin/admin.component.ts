import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Driver } from 'src/app/interfaces/auth/driver';
import { HotelOwner } from 'src/app/interfaces/auth/hotel-owner';
import { Touguide } from 'src/app/interfaces/auth/touguide';
import { User } from 'src/app/interfaces/auth/user';
import { DriverService } from 'src/app/services/login/driver.service';
import { HotelownerService } from 'src/app/services/login/hotelowner.service';
import { TourguideService } from 'src/app/services/login/tourguide.service';
import { UserService } from 'src/app/services/login/user.service';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  AllUsersList :Array <User> =[]; 
  AllTourguide :Array <Touguide>=[];
  AllDriver :Array <Driver>=[];
  AllHotelOwner: Array <HotelOwner>=[];

constructor(private router:Router
  ,private OurUsersService:UserService,
  private TourguideService: TourguideService,
  private HotelOwnwerService:HotelownerService,
  private DriverServer: DriverService,
  private toaster: ToastrService,
  private spinner: NgxSpinnerService, ){}

 ngOnInit(): void {
  //  this.GetAllUsers();
 }

// ================================Routes====================================================
 addAdmin(){
  this.router.navigate(['dashboard/dashboard/signupform'])
 }

 addUser(){
  this.router.navigate(['dashboard/dashboard/signupformUser'])
}
addDriver(){
  this.router.navigate(['dashboard/dashboard/signupforDriver'])
}

addHotelOwner(){
  this.router.navigate(['dashboard/dashboard/signupforHotelOwner'])
}

addTourguide(){
  this.router.navigate(['dashboard/dashboard/signupforTourguide'])
}

// ================================End Routes====================================================

// ====================Get users ================================================================
GetAllTourguide(){   
     this.spinner.show();
  this.TourguideService.getTourGuidetlist().subscribe(
    res=>{ 
      this.spinner.hide();
      this.AllTourguide = res } )
}
GetAllDriver(){
  this.spinner.show();
  this.DriverServer.GetUserDrivirs().subscribe(
    res=>{ 
      this.spinner.hide();
      this.AllDriver = res } )
}
GetHotelOwner(){
  this.spinner.show();
  this.HotelOwnwerService.GetUserHotelOwner().subscribe(
    res=>{ 
      this.spinner.hide();
      this.AllHotelOwner = res } )
}
GetAllUsers(){
  this.spinner.show();
  this.OurUsersService.GetUsers().subscribe(
    res=>{ 
      this.spinner.hide();
      this.AllUsersList = res } )
}

// ====================Get users ================================================================

// ====================Delete users =============================================================
// deleteTourguide(id : any){
//   this.spinner.show();
//   this.TourguideService.deleteTourguide(id).subscribe(
//     res => {
//       this.spinner.hide()
//       this.GetAllUsers()
//     },error=>{
//       this.toaster.error(error.error.massage)
//       this.spinner.hide()
//     }
//   )
// }
// deleteDriver(id : any){
//   this.spinner.show();
//   this.DriverServer.deleteDrivers(id).subscribe(
//     res => {
//       this.spinner.hide()
//       this.GetAllUsers()
//     },error=>{
//       this.toaster.error(error.error.massage)
//       this.spinner.hide()
//     }
//   )
// }
// deleteHotelOwner(id : any){
//   this.spinner.show();
//   this.HotelOwnwerService.deleteHotelOwner(id).subscribe(
//     res => {
//       this.spinner.hide()
//       this.GetAllUsers()
//     },error=>{
//       this.toaster.error(error.error.massage)
//       this.spinner.hide()
//     }
//   )
// }



deleteUser(id : any){
  this.spinner.show();
  this.OurUsersService.deleteUser(id).subscribe(
    res => {
      this.spinner.hide()
      this.GetAllUsers()
    },error=>{
      this.toaster.error(error.error.massage)
      this.spinner.hide()
    }
  )
}
// ====================End Delete users =============================================================
 

}
