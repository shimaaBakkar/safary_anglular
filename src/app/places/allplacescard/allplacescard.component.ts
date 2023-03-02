import { Component ,Input } from '@angular/core';

@Component({
  selector: 'app-allplacescard',
  templateUrl: './allplacescard.component.html',
  styleUrls: ['./allplacescard.component.css']
})
export class AllplacescardComponent {
  @Input() places={
    id: '',
    // title: '',
    // price: '',
    address: '',
    // description: '',
    // image: '',
  }

}

