import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tourgide-reg',
  templateUrl: './tourgide-reg.component.html',
  styleUrls: ['./tourgide-reg.component.css']
})
export class TourgideRegComponent implements OnInit{

  TourgideRegForm!: FormGroup;
  form: FormGroup<{ gender: FormControl<string | null>; }>; 
  constructor(fb: FormBuilder) {
    this.TourgideRegForm = new FormGroup({

      TourgideName: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z]{3,}')]),
      gender: this.form = fb.group({
        gender: ['', Validators.required]
      }),
      Tourgideemail: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      Tourgidepassword: new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
      LicenseNumber: new FormControl('', [Validators.required, Validators.pattern('{6,}')]),
    });
  }

  get TourgideName() {
    return this.TourgideRegForm.get('TourgideName');
  }

  get gender() {
    return this.TourgideRegForm.get('gender');
  }

  get Tourgideemail() {
    return this.TourgideRegForm.get('Tourgideemail');
  }

  get Tourgidepassword() {
    return this.TourgideRegForm.get('Tourgidepassword');
  }

  get LicenseNumber() {
    return this.TourgideRegForm.get('LicenseNumber');
  }


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  fillTourgideRegForm() {
    this.TourgideRegForm.setValue(
      {
        TourgideName: '',
        Tourgideemail: '',
        gender: '',
        Tourgidepassword: '',
        CommercialRegNumber: '',
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
