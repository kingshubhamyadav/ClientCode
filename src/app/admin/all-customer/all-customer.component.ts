import { Component, OnInit } from '@angular/core';
import { GetAllCustomer } from 'src/app/models/getAllCustomer';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-all-customer',
  templateUrl: './all-customer.component.html',
  styleUrls: ['./all-customer.component.css']
})
export class AllCustomerComponent implements OnInit {
  userId=Number(localStorage.getItem('userId'));
  cust:GetAllCustomer[]=[];
  constructor(private adminService:AdminService) { }


  ngOnInit(): void {
    this.adminService.getAllCustomer()
    .subscribe({
      next:(cust)=>{
       this.cust=cust;
       console.log(cust);
      },
      error:(response)=>{
        console.log(response);
      }
    })
  }

}
