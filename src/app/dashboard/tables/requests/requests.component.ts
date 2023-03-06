import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { RequestService } from 'src/app/services/request.service';
import { Request } from 'src/app/interfaces/request';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})

    export class RequestsComponent {
      constructor(private router:Router,
        private RequestsService: RequestService , 
        private toaster: ToastrService,
        private spinner: NgxSpinnerService, ){}
      
    
        requestList :Array <Request> =[]; 

        
      GetAllRequest(){
        this.RequestsService.getrequest().subscribe(
          res=>{ 
            this.requestList = res } )
      }
      
      deleteRequest(id : any){
        this.spinner.show();
        this.RequestsService.deleteRequest(id).subscribe(
          res => {
            this.spinner.hide()
            this.GetAllRequest()
          },error=>{
            this.toaster.error(error.error.massage)
            this.spinner.hide()
          }
        )
      }
    }
    



