import { Component } from '@angular/core';
import { Hotel } from 'src/app/interfaces/hotel';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent {
  HotelList:Array <Hotel> =[];
  // HotelList:Array <any> =[3,4,6,6];

  constructor(private HotelsListService : HotelService ){};
  
  ngOnInit():void{
  this.getplace();
  }
  
  getplace(){
    this.HotelsListService.getHotelList().subscribe(
      res => {this.HotelList=res}
    )
  }


}
