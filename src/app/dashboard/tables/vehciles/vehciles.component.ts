import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Transport } from 'src/app/interfaces/transport';
import { TransportService } from 'src/app/services/transport.service';
@Component({
  selector: 'app-vehciles',
  templateUrl: './vehciles.component.html',
  styleUrls: ['./vehciles.component.css']
})

export class VehcilesComponent {
    constructor(private router:Router,
      private TransportService : TransportService, 
      private toaster: ToastrService,
      private spinner: NgxSpinnerService, ){}
    
      VehcileList :Array <Transport> =[]; 



      GetAllVehciles(){
        this.TransportService.getTransporttlist().subscribe(
          res=>{ 
            this.VehcileList = res } )
      }
      
      deleteVehicle(id : any){
        this.spinner.show();
        this.TransportService.deleteTransport(id).subscribe(
          res => {
            this.spinner.hide()
            this.GetAllVehciles()
          },error=>{
            this.toaster.error(error.error.massage)
            this.spinner.hide()
          }
        )
      }
  }