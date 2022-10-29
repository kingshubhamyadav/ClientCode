import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { washType } from 'src/app/Models/washType';
import { CustomerService } from 'src/app/service/customer.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  services:washType[]=[];

  constructor(private customerService:CustomerService, private router:Router) { }
  role=localStorage.getItem('role');

  ngOnInit(): void {
    this.customerService.getAllWashType()
    .subscribe({
      next:(services)=>{
       this.services=services;
      },
      error:(response)=>{
        console.log(response);
      }
    })
  }
  checkout(washTypeId :string,charges:string,catogries:string){
        localStorage.setItem('washTypeId',washTypeId);
        localStorage.setItem('charges',charges);
        localStorage.setItem('serviceName',catogries);
        this.router.navigate(['/checkout']);
  }

}
