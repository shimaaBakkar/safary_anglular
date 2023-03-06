import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vehcilecard',
  templateUrl: './vehcilecard.component.html',
  styleUrls: ['./vehcilecard.component.css']
})
export class VehcilecardComponent {
  @Input()  Vehcile={
 
    id:'',
    type:'',
    license : '',
    image : '',
    driver_id: ''
   
   
  }

}
