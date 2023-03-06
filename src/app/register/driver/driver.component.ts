import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {
  DriverRegForm!: FormGroup;
  form: FormGroup<{ gender: FormControl<string | null>; }>; 

  constructor(fb: FormBuilder) {
    this.DriverRegForm = new FormGroup({

      DriverName: new FormControl('', [Validators.required, Validators.pattern(/[A-Za-z]{3,}/)]),
      gender: this.form = fb.group({
        gender: ['', Validators.required]
      }),
      Driveremail: new FormControl('', [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$/)]),
      Driverpassword: new FormControl('', [Validators.required, Validators.pattern(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}/)]),
      LicenseNumber: new FormControl('', [Validators.required, Validators.pattern(/[0-9]{15,}/)]),

    });
  }

  get DriverName() {
    return this.DriverRegForm.get('DriverName');
  }

  get gender() {
    return this.DriverRegForm.get('gender');
  }

  get Driveremail() {
    return this.DriverRegForm.get('Driveremail');
  }

  get Driverpassword() {
    return this.DriverRegForm.get('Driverpassword');
  }

  get LicenseNumber() {
    return this.DriverRegForm.get('LicenseNumber');
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  fillDriverRegForm() {
    this.DriverRegForm.setValue(
      {
        DriverName: '',
        Driveremail: '',
        gender: '',
        Driverpassword: '',
        LicenseNumber: '',
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