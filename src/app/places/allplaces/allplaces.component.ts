import { Component } from '@angular/core';
import { Places } from 'src/app/interfaces/places';
import { PlacesService } from 'src/app/services/places.service';


@Component({
  selector: 'app-allplaces',
  templateUrl: './allplaces.component.html',
  styleUrls: ['./allplaces.component.css']
})
export class AllplacesComponent {
placesList:Array <Places> =[];

constructor(private placesListServices :PlacesService){};

ngOnInit():void{
  
  this.placesListServices.getplacestlist().subscribe(
    res => {this.placesList=res}
  )
}


}

