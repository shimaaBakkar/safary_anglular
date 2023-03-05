import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-hotelOwner-reg',
  templateUrl: './hotelOwner-reg.component.html',
  styleUrls: ['./hotelOwner-reg.component.css']
})

export class HotelOwnerRegComponent implements OnInit {
  HotelOwnerRegForm!: FormGroup;
  form: FormGroup<{ gender: FormControl<string | null>; }>; 

  constructor(fb: FormBuilder) {
    this.HotelOwnerRegForm = new FormGroup({

      HotelOwnerName: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z]{3,}')]),
      gender: this.form = fb.group({
        gender: ['', Validators.required]
      }),
      HotelOwneremail: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      HotelOwnerpassword: new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
      CommercialRegNumber: new FormControl('', [Validators.required, Validators.pattern('{15,}')]),

    });
  }

  get HotelOwnerName() {
    return this.HotelOwnerRegForm.get('HotelOwnerName');
  }

  get gender() {
    return this.HotelOwnerRegForm.get('gender');
  }

  get HotelOwneremail() {
    return this.HotelOwnerRegForm.get('HotelOwneremail');
  }

  get HotelOwnerpassword() {
    return this.HotelOwnerRegForm.get('HotelOwnerpassword');
  }

  get CommercialRegNumber() {
    return this.HotelOwnerRegForm.get('CommercialRegNumber');
  }


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  fillHotelOwnerRegForm() {
    this.HotelOwnerRegForm.setValue(
      {
        HotelOwnerName: '',
        HotelOwneremail: '',
        gender: '',
        HotelOwnerpassword: '',
        CommercialRegNumber: '',
      }
    )
  }


  // SUBMIT FUNCTION
  // userSubmit()
  // {
  //   let userModel: IUser = <IUser> HotelOwnerRegComponent.value;
  // call [API] & send [userModel]


  // FOR TEST 
  // console.log(userModel); => return object of userModel =>> (well done ^-^, its ready to send to backend ^-^);

  // }
  // HotelOwnerRegComponent!: FormGroup;
}