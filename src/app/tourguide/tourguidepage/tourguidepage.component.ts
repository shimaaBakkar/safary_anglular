import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Tourguide } from 'src/app/interfaces/tourguide';
import { TourguideService } from 'src/app/services/login/tourguide.service';

@Component({
  selector: 'app-tourguidepage',
  templateUrl: './tourguidepage.component.html',
  styleUrls: ['./tourguidepage.component.css']
})
export class TourguidepageComponent {

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
