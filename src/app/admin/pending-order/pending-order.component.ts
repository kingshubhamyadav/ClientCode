import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/Models/order';
import { AdminService } from 'src/app/service/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pending-order',
  templateUrl: './pending-order.component.html',
  styleUrls: ['./pending-order.component.css']
})
export class PendingOrderComponent implements OnInit {

  pen:Order[]=[];
  constructor(private adminService:AdminService) { }
  role = localStorage.getItem('role');

  ngOnInit(): void {
    this.adminService.getPendingOrder()
    .subscribe({
      next:(pen)=>{
       this.pen=pen;
       console.log(pen);
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
}
