import { Component } from '@angular/core';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent {

}
function openHotelDetails(this: any, roomId: number) {
  this.router.navigate(['/room',roomId]);

  // throw new Error('Function not implemented.');
}