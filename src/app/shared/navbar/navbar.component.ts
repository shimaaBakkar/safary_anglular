import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
buy(arg0: any) {
throw new Error('Method not implemented.');
}
hotel: any;


  openplace(){
this.router.navigate(['Allplaces'])
  }
}
