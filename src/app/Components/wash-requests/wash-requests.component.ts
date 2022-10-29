import { Component, OnInit } from '@angular/core';
import { Requests } from 'src/app/Models/requests.model';
import { WasherApiService } from 'src/app/Services/washer-api.service';
import { Router } from '@angular/router';
import { ConnectableObservable } from 'rxjs';
import { acceptRequest } from 'src/app/Models/AcceptRequest.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-wash-requests',
  templateUrl: './wash-requests.component.html',
  styleUrls: ['./wash-requests.component.css']
})
export class WashRequestsComponent implements OnInit {

  constructor(private router : Router, private washerService : WasherApiService) { }
  role=localStorage.getItem('role');
  requests! : Requests[];
  hideRequest : boolean = false;
  acceptRequestObj : acceptRequest = new acceptRequest();

  ngOnInit(): void {
    this.getRequests();
  }

  getRequests(){
    this.washerService.getRequests()
        .subscribe(data => {
          this.requests = data;
          console.log(this.requests);
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

  accept(row : any){
    this.acceptRequestObj.orderId = row.orderId;
    this.acceptRequestObj.washerId = "2";

    this.washerService.postWashRequest(this.acceptRequestObj)
        .subscribe(res => {
          Swal.fire({
            icon: 'success',
            title: 'Order has been accepted successfully.'
            //footer: '<a href="">Why do I have this issue?</a>'
          })
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
}
