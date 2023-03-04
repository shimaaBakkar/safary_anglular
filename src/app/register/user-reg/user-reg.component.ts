import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.css']
})

export class UserRegComponent implements OnInit {
  UserRegForm!: FormGroup;
  constructor() {
    this.UserRegForm = new FormGroup({
      userName: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z]{3,}')]),
      // gender: new FormControl('') ,
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z]{8,}')]),
    });
  }

  // constructor(private fb: formBuilder) {
  //   this.UserRegForm = new FormGroup ({
  //         userName:['',[Validators.required,Validators.pattern('[A-Za-z]{3,}')]],
  //         // gender: new FormControl('') ,
  //         email: ['',[Validators.required]],
  //         password: ['',[Validators.required,Validators.pattern('[A-Za-z]{8,}')]],
  //       });

  // }


  // export class UserLogComponent implements OnInit {
  //   UserLogComponent!: FormGroup;
  //   constructor() {
  //     this.UserLogComponent = new FormGroup ({
  //       email: new FormControl('') ,
  //       password: new FormControl('') ,
  //     });
  //   }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  // UserRegForm!: FormGroup;
}