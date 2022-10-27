import { Component, OnInit } from '@angular/core';
import { orderHistory } from 'src/app/models/orderHistory';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  orders:orderHistory[]=[];
  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
    this.customerService.getOrdersHistory()
    .subscribe({
      next:(orders)=>{
       this.orders=orders;
       console.log(orders);
      },
      error:(response)=>{
        console.log(response);
      }
    })
  }

}
