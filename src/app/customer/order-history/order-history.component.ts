import { Component, OnInit } from '@angular/core';
import { orderHistory } from 'src/app/models/orderHistory';
import { CustomerService } from 'src/app/service/customer.service';
import Swal from 'sweetalert2';


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

  // giveRating(){

  //   Swal.fire({
  //     title: 'How old are you?',
  //     icon: 'question',
  //     input: 'range',
  //     inputLabel: 'Your age',
  //     inputAttributes: {
  //       min: 1,
  //       max: 5,
  //       step: 1
  //     },
  //     inputValue: 5
  //   })


  // }

}
