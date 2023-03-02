import { Component } from '@angular/core';
import { Transport } from 'src/app/interfaces/transport';
import { TransportService } from 'src/app/services/transport.service';

@Component({
  selector: 'app-vehcilepage',
  templateUrl: './vehcilepage.component.html',
  styleUrls: ['./vehcilepage.component.css']
})
export class VehcilepageComponent {
  VehcileList:Array <Transport> =[];

  constructor(private TransportServices :TransportService){};

  ngOnInit():void{
  
    this.TransportServices.getTransporttlist().subscribe(
      res => {this.VehcileList=res}
    )
  }
}
