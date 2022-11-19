import { Component, OnInit } from '@angular/core';
import { Requests } from 'src/app/Models/requests.model';
import { WasherApiService } from 'src/app/Services/washer-api.service';
import { Router } from '@angular/router';
import { ConnectableObservable } from 'rxjs';
import { acceptRequest } from 'src/app/Models/AcceptRequest.model';
import { SendMail } from 'src/app/models/sendMail.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-wash-requests',
  templateUrl: './wash-requests.component.html',
  styleUrls: ['./wash-requests.component.css']
})

export class WashRequestsComponent implements OnInit {

  constructor(private router : Router, private washerService : WasherApiService) { }
  role=localStorage.getItem('role');
  userId = JSON.parse(localStorage.getItem('userId') || '{}');
  requests! : Requests[];
  hideRequest : boolean = false;
  acceptRequestObj : acceptRequest = new acceptRequest();
  sendMailObj : SendMail = new SendMail();

  ngOnInit(): void {
    this.getRequests();
  }

  getRequests(){
    this.washerService.getRequests()
        .subscribe(data => {
          this.requests = data;
        },
        err => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong! Unable to fetch requests.',
            //footer: '<a href="">Why do I have this issue?</a>'
          })
        });
  }

  decline(index : any){
    var row = document.getElementsByClassName(index); //stores the row with class name index.
    for(let i=0; i<row.length;i++)
    {
      row[i].classList.add("hidden"); // adds this class to that row.
    }
  }

  accept(row : any, index :any){
    this.acceptRequestObj.orderId = row.orderId;
    this.acceptRequestObj.washerId = this.userId;

    this.sendMailObj.to = this.requests[index].email;
    this.sendMailObj.subject = "Wash Order has been accepted";
    this.sendMailObj.message = `Hello Customer, this mail is to inform that your car wash order with orderId ${this.acceptRequestObj.orderId} has been accepted by a washer`;

    this.washerService.postWashRequest(this.acceptRequestObj)
        .subscribe(res => {
          Swal.fire({
            icon: 'success',
            title: 'Order has been accepted successfully.'
            //footer: '<a href="">Why do I have this issue?</a>'
          })
          this.sendMail(this.sendMailObj);
          this.getRequests();
        },
        err => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            //footer: '<a href="">Why do I have this issue?</a>'
          })
        })
  }

  sendMail(email : any)
  {
    this.washerService.sendEmail(email)
    .subscribe();
  }
}
