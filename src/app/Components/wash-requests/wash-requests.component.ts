import { Component, OnInit } from '@angular/core';
import { Requests } from 'src/app/Models/requests.model';
import { WasherApiService } from 'src/app/Services/washer-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wash-requests',
  templateUrl: './wash-requests.component.html',
  styleUrls: ['./wash-requests.component.css']
})
export class WashRequestsComponent implements OnInit {

  constructor(private router : Router, private washerService : WasherApiService) { }
  requests! : Requests[];

  ngOnInit(): void {
    this.getRequests
  }

  getRequests(){
    this.washerService.getRequests()
        .subscribe(data => {
          this.requests = data;
        });
  }
}
