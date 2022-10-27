import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-all-order',
  templateUrl: './all-order.component.html',
  styleUrls: ['./all-order.component.css']
})
export class AllOrderComponent implements OnInit {

  order:Order[]=[];
  constructor(private adminService:AdminService) { }


  ngOnInit(): void {
    this.adminService.getAllOrder()
    .subscribe({
      next:(order)=>{
       this.order=order;
       console.log(order);
      },
      error:(response)=>{
        console.log(response);
      }
    })
  }

}
