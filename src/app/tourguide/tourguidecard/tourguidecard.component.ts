import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tourguidecard',
  templateUrl: './tourguidecard.component.html',
  styleUrls: ['./tourguidecard.component.css']
})
export class TourguidecardComponent {
  @Input() Tourguide={
    price_per_day: '',
    syndicate_No: '',
    desc: '',
   user_id: ''
  
  }


  
}
