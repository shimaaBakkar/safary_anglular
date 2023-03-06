import { Component } from '@angular/core';
import { Places } from 'src/app/interfaces/places';
import { PlacesService } from 'src/app/services/places.service';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent {
  placesList:Array <any> =[3,4,6,6];
  // placesList:Array <Places> =[];

  constructor(private placesListServices :PlacesService){};
  
  ngOnInit():void{
  this.getplace();
  }
  
  getplace(){
    this.placesListServices.getplacestlist().subscribe(
      res => {this.placesList=res}
    )
  }
}
