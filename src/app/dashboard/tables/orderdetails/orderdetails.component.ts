import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { OrderDetails } from 'src/app/interfaces/order-details';
import { OrderdetailsService } from 'src/app/services/orderdetails.service';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent {

  constructor(private router:Router
    ,private OrderDetailService: OrderdetailsService,
    private toaster: ToastrService,
    private spinner: NgxSpinnerService, ){}
  
    OrderDetailsList :Array <OrderDetails> =[]; 

    ngOnInit(): void {
      this.Orderlist();
    }

    Orderlist(){
      this.OrderDetailService.getOrders().subscribe(
        res=>{ 
          this.OrderDetailsList = res } )
    }
    
    deleteOrder(id : any){
      this.spinner.show();
      this.OrderDetailService.deleteOrder(id).subscribe(
        res => {
          this.spinner.hide()
          this.Orderlist()
        },error=>{
          this.toaster.error(error.error.massage)
          this.spinner.hide()
        }
      )
    }
}
