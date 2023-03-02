import { Component } from '@angular/core';
import { Iplaces } from '../iplaces';

@Component({
  selector: 'app-allplaces',
  templateUrl: './allplaces.component.html',
  styleUrls: ['./allplaces.component.css']
})
export class AllplacesComponent {
  placeCards = new Array(12);
  cardsList:Iplaces[] = []; //to return filter results in it
}



// function filterPlacesByType() {
//   // throw new Error('Function not implemented.');
//   this.cardsList = this.cardsList.filter(card => card.type == this.selectedPlaaceType)
// }

