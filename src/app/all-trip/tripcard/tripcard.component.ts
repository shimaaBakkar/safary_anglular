import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tripcard',
  templateUrl: './tripcard.component.html',
  styleUrls: ['./tripcard.component.css']
})
export class TripcardComponent {
  @Input() Trip={
    Trip_id:'',
    description:'',
    price:'',
    cover_img:'',
    n_of_people: 0 ,
    n_of_places:0,
    num_of_days:0 
  }
}
