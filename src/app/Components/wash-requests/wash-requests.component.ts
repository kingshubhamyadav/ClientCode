import { Component, OnInit } from '@angular/core';
import { Requests } from 'src/app/models/requests.model';
import { WasherApiService } from 'src/app/Services/washer-api.service';
import { Router } from '@angular/router';
import { ConnectableObservable } from 'rxjs';
import { acceptRequest } from 'src/app/models/AcceptRequest.model';

@Component({
  selector: 'app-wash-requests',
  templateUrl: './wash-requests.component.html',
  styleUrls: ['./wash-requests.component.css']
})
export class WashRequestsComponent implements OnInit {

  constructor(private router : Router, private washerService : WasherApiService) { }
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
          alert("Wash request has been added successfully!");
          this.getRequests();
        },
        err => {
          alert("Something went wrong");
        })
  }
}
