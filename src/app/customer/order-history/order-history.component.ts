import { Component, OnInit } from '@angular/core';
import { orderHistory } from 'src/app/models/orderHistory';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {
   title='Order History';
  userId=Number(localStorage.getItem('userId'));
  orders:orderHistory[]=[];
  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
    this.customerService.getOrdersHistory(this.userId)
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
