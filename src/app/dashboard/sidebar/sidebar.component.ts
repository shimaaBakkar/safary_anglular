import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

constructor (private router : Router){}
  HotelsTable(){ this.router.navigate(['/dashboard/dashboard/HotelsTable' ])}
  OrderdetailsTable(){ this.router.navigate(['/dashboard/dashboard/OrderdetailsTable' ])}
  VehcilesTable(){ this.router.navigate(['/dashboard/dashboard/VehcilesTable' ])}
  TripsTablet(){ this.router.navigate(['/dashboard/dashboard/TripsTablet' ])}
  PlacesTable(){ this.router.navigate(['/dashboard/dashboard/PlacesTable' ])}
  RequestsTable(){ this.router.navigate(['/dashboard/dashboard/RequestsTable' ])}
}
