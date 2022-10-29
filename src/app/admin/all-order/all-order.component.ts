import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';
import { AdminService } from 'src/app/service/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-order',
  templateUrl: './all-order.component.html',
  styleUrls: ['./all-order.component.css']
})
export class AllOrderComponent implements OnInit {

  order:Order[]=[];
  constructor(private adminService:AdminService) { }
  role = localStorage.getItem('role');

  ngOnInit(): void {
    this.adminService.getAllOrder()
    .subscribe({
      next:(order)=>{
       this.order=order;
       console.log(order);
      },
      error:(response)=>{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong! Unable to fetch all orders!',
          //footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    })
  }

}
