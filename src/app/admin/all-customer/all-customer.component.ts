import { Component, OnInit } from '@angular/core';
import { GetAllCustomer } from 'src/app/models/getAllCustomer';
import { AdminService } from 'src/app/service/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-customer',
  templateUrl: './all-customer.component.html',
  styleUrls: ['./all-customer.component.css']
})
export class AllCustomerComponent implements OnInit {
  userId=Number(localStorage.getItem('userId'));
  cust:GetAllCustomer[]=[];
  constructor(private adminService:AdminService) { }
  role = localStorage.getItem('role');

  ngOnInit(): void {
    this.adminService.getAllCustomer()
    .subscribe({
      next:(cust)=>{
       this.cust=cust;
       console.log(cust);
      },
      error:(response)=>{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong! Unable to fetch customer details!',
          //footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    })
  }

  //change status
  changeStatus(i:number){
    if(this.cust[i].status=='Active'){
      this.cust[i].status='InActive'

      this.adminService.customerStatus(this.cust[i])
      .subscribe()

    }
    else{
       this.cust[i].status='Active'
      this.adminService.customerStatus(this.cust[i])
      .subscribe()
    }



  }


}
