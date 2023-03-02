import { Component } from '@angular/core';
import { Tourguide } from 'src/app/interfaces/tourguide';
import { TourguideService } from 'src/app/services/tourguide.service';

@Component({
  selector: 'app-tourguidepage',
  templateUrl: './tourguidepage.component.html',
  styleUrls: ['./tourguidepage.component.css']
})
export class TourguidepageComponent {
  TourguideList:Array <Tourguide> =[];
  
constructor(private TourguideListServices :TourguideService){};

ngOnInit():void{
  
  this.TourguideListServices.getTourGuidetlist().subscribe(
    res => {this.TourguideList=res}
  )
}
}
