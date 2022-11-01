import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerRating } from 'src/app/models/customerRating';
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
  rating= new CustomerRating();
  constructor(private customerService:CustomerService,private router:Router) { }
  role=localStorage.getItem('role');

  ngOnInit(): void {
    this.customerService.getOrdersHistory(this.userId)
    .subscribe({
      next:(orders)=>{
       this.orders=orders;

      },
      error:(response)=>{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong! Could not fetch order history.',
          //footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    })
  }

invoice(index:number,orderIdInPayment:number){
  console.log(orderIdInPayment);
  this.customerService.getPaymentDetails(orderIdInPayment)
    .subscribe({
      next:(orders)=>{
       this.orders=orders;
      },

    })
    localStorage.setItem('totalDiscount',this.orders[index].totalDiscount);
    localStorage.setItem('amountPaid',this.orders[index].amountPaid);
    localStorage.setItem('dateWashInv',this.orders[index].dateOfWash);
    this.router.navigate(['/invoice']);
}

orderId=0;
getOrderId(orderIdInPayment:number){
  this.orderId=orderIdInPayment;

}
// rating on order
customerRating(rating:CustomerRating){
  rating.orderId=this.orderId;
  this.customerService.customerRating(rating).subscribe(res =>{
    Swal.fire({
      icon: 'success',
      title: 'Rating Given Successfully',
    })
  })

}



}
