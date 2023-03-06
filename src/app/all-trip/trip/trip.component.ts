import { Component } from '@angular/core';
import { Trip } from 'src/app/interfaces/trip';
import { TripService } from 'src/app/services/trip.service';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent {
  TripList:Array <Trip> =[];

  constructor (private TripListServices :TripService){}
  
  ngOnInit():void{
  
    this.TripListServices.getTriptlist().subscribe(
      res => {this.TripList=res}
    )
  }
}
