import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-pending-order',
  templateUrl: './pending-order.component.html',
  styleUrls: ['./pending-order.component.css']
})
export class PendingOrderComponent implements OnInit {

  pen:Order[]=[];
  constructor(private adminService:AdminService) { }


  ngOnInit(): void {
    this.adminService.getPendingOrder()
    .subscribe({
      next:(pen)=>{
       this.pen=pen;
       console.log(pen);
      },
      error:(response)=>{
        console.log(response);
      }
    })
  }
}
