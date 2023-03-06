import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Tourguide } from 'src/app/interfaces/tourguide';
import { TourguideService } from 'src/app/services/login/tourguide.service';

@Component({
  selector: 'app-custom-tourgide',
  templateUrl: './custom-tourgide.component.html',
  styleUrls: ['./custom-tourgide.component.css']
})

export class CustomTourgideComponent {

  TourguideList:Array <Tourguide> =[];
  
constructor(private TourguideListServices :TourguideService,
  private spinner: NgxSpinnerService){};    

ngOnInit():void{
  this.spinner.show();
  this.TourguideListServices.getTourGuidetlist().subscribe(
    res => {this.TourguideList=res}
  
  )
  setTimeout(() => {
    /** spinner ends after 5 seconds */
    this.spinner.hide();
  }, 3000);

}
}
