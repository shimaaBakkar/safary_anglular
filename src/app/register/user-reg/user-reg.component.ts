import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.css']
})
// export class UserRegComponent implements OnInit {
//   UserRegForm!: FormGroup;

//   ngOnInit(): OnInit(): void {
    
//   }
// }

export class UserRegComponent implements OnInit {
  UserRegForm!: FormGroup;
  constructor() {
    this.UserRegForm = new FormGroup ({
      
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  // UserRegForm!: FormGroup;
}