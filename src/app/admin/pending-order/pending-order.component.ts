import { Component, OnInit } from '@angular/core';
import { GetAllWasher } from 'src/app/models/getAllWasher';
import { Order } from 'src/app/models/order';
import { AdminService } from 'src/app/service/admin.service';
import { acceptRequest } from 'src/app/Models/AcceptRequest.model';
import { SendMail } from 'src/app/models/sendMail.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pending-order',
  templateUrl: './pending-order.component.html',
  styleUrls: ['./pending-order.component.css']
})
export class PendingOrderComponent implements OnInit {

  pen:Order[]=[];
  index!:any;
  washers! : GetAllWasher[];
  constructor(private adminService:AdminService) { }
  role = localStorage.getItem('role');
  acceptRequestObj : acceptRequest = new acceptRequest();
  newRequestObj : any;
  sendMailObj : SendMail = new SendMail();


  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(){
    this.adminService.getPendingOrder()
    .subscribe({
      next:(pen)=>{
       this.pen=pen;
      },
      error:(response)=>{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong! Unable to fetch pending orders!',
          //footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    })
  }

  getWashers(row : any,index : any){
    this.index = index;
    this.adminService.getAllWasher()
    .subscribe(res => {
      this.washers = res;
      this.acceptRequestObj.orderId = row.orderId;
    },
    err => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Unable to fetch available washers.',
        //footer: '<a href="">Why do I have this issue?</a>'
      })
    })
  }

  assignWasher(){
  //   this.sendMailObj.to = this.pen[this.index].userMail;
  //   this.sendMailObj.subject = "Wash Order has been accepted";
  //   this.sendMailObj.message = `Hello Customer, this mail is to inform that your car wash order with orderId ${this.acceptRequestObj.orderId} has been accepted by a washer`;

  //   this.adminService.postWashRequest(this.acceptRequestObj)
  //   .subscribe(res => {
  //     Swal.fire({
  //       icon: 'success',
  //       title: 'Order has been accepted successfully.'
  //       //footer: '<a href="">Why do I have this issue?</a>'
  //     })
  //     this.sendMail(this.sendMailObj);
  //     let ref = document.getElementById('cancel');
  //     ref?.click();
  //     this.getOrders();
  //   },
  //   err => {
  //     Swal.fire({
  //       icon: 'error',
  //       title: 'Oops...',
  //       text: 'Something went wrong!',
  //       //footer: '<a href="">Why do I have this issue?</a>'
  //     })
  //   })
  // }

  // sendMail(email : any)
  // {
  //   this.adminService.sendEmail(email)
  //   .subscribe();
  }

}
