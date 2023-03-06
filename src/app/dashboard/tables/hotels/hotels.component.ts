import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Hotel } from 'src/app/interfaces/hotel';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  constructor(private router:Router
    ,private HotelsService: HotelService,
    private toaster: ToastrService,
    private spinner: NgxSpinnerService, ){}
  
    hotelList :Array <Hotel> =[]; 

  
    
    ngOnInit(): void {
       this.Hotellist();
     }






    Hotellist(){
      this.HotelsService.getHotelList().subscribe(
        res=>{ 
          this.hotelList = res } )
    }
    
    deleteHotel(id : any){
      this.spinner.show();
      this.HotelsService.deleteHotels(id).subscribe(
        res => {
          this.spinner.hide()
          this.Hotellist()
        },error=>{
          this.toaster.error(error.error.massage)
          this.spinner.hide()
        }
      )


}

updateHotel(){
  
}
}
