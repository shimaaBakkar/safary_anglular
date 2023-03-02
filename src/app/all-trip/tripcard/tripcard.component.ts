import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tripcard',
  templateUrl: './tripcard.component.html',
  styleUrls: ['./tripcard.component.css']
})
export class TripcardComponent {
  @Input() Trip={
    id: '',
    title: '',
    price: '',
    category: '',
    description: '',
    image: '',
  }
}
