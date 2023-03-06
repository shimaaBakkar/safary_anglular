import { Component } from '@angular/core';

@Component({
  selector: 'app-all-hotels',
  templateUrl: './all-hotels.component.html',
  styleUrls: ['./all-hotels.component.css']
})
export class AllHotelsComponent {

}

function openHotelDetails(this: any, hotelId: number) {
  this.router.navigate(['/hotels',hotelId]);

  // throw new Error('Function not implemented.');
}
