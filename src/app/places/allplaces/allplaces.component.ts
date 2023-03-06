import { Component } from '@angular/core';
import { Places } from 'src/app/interfaces/places';
import { PlacesService } from 'src/app/services/places.service';

import { Iplaces } from '../iplaces';

@Component({
  selector: 'app-allplaces',
  templateUrl: './allplaces.component.html',
  styleUrls: ['./allplaces.component.css']
})
export class AllplacesComponent {
placesList:Array <Places> =[];

constructor(private placesListServices :PlacesService){};

ngOnInit():void{
this.getplace();
}

getplace(){
  this.placesListServices.getplacestlist().subscribe(
    res => {this.placesList=res}
  )
}

  placeCards = new Array(12);
  cardsList:Iplaces[] = []; //to return filter results in it
}



// function filterPlacesByType() {
//   // throw new Error('Function not implemented.');
//   this.cardsList = this.cardsList.filter(card => card.type == this.selectedPlaaceType)
// }

