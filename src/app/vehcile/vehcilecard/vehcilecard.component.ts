import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vehcilecard',
  templateUrl: './vehcilecard.component.html',
  styleUrls: ['./vehcilecard.component.css']
})
export class VehcilecardComponent {
  @Input()  Vehcile={
    id: '',
    title: '',
    price: '',
    category: '',
    description: '',
    image: '',
  }

}
