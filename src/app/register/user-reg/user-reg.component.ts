import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.css']
})

export class UserRegComponent implements OnInit {
  UserRegForm!: FormGroup;
  form: FormGroup<{ gender: FormControl<string | null>; }>;
  constructor(fb: FormBuilder) {
    this.UserRegForm = new FormGroup({
      userName: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z]{3,}')]),
      // gender: new FormControl('') ,
      // this.form = fb.group
      // gender: new FormGroup("", Validators.required),
      gender: this.form = fb.group({
        gender: ['', Validators.required]
      }),
      // gender: new FormGroup({
      //   gender: ['', Validators.required]
      // }),
      email: new FormControl('', [Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      password: new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
    });
  }

  get userName()
  {
    return this.UserRegForm.get('userName');
  }

  get gender()
  {
    return this.UserRegForm.get('gender');
  }

  get email()
  {
    return this.UserRegForm.get('email');
  }

  get password()
  {
    return this.UserRegForm.get('password');
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  filluserForm()
{
  this.UserRegForm.setValue(
    {
      userName: '',
      email: '' ,
      password: '',
    }
  )
}


// SUBMIT FUNCTION
// userSubmit()
// {
//   let userModel: IUser = <IUser> UserRegForm.value;
// call [API] & send [userModel]


// FOR TEST 
// console.log(userModel); => return object of userModel =>> (well done ^-^, its ready to send to backend ^-^);

// }
  // UserRegForm!: FormGroup;
}



// export class UserLogComponent implements OnInit {
//   UserLogComponent!: FormGroup;
//   constructor() {
//     this.UserLogComponent = new FormGroup({
//       userName: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z]{3,}')]),
//       // gender: new FormControl('') ,
//       email: new FormControl('', [Validators.required]),
//       password: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z]{8,}')]),
//     });
//   }

//   get userName()
//   {
//     return this.UserLogComponent.get('userName');
//   }

//   get email()
//   {
//     return this.UserLogComponent.get('email');
//   }

//   get password()
//   {
//     return this.UserLogComponent.get('password');
//   }

//   ngOnInit(): void {
//     throw new Error('Method not implemented.');
//   }
// }