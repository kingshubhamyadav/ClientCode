import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Orders } from 'src/app/Models/orders.model';
import { WasherApiService } from 'src/app/Services/washer-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-past-orders',
  templateUrl: './past-orders.component.html',
  styleUrls: ['./past-orders.component.css']
})
export class PastOrdersComponent implements OnInit {

  constructor(private router : Router,private washerService : WasherApiService) { }
  role = localStorage.getItem('role');
  userId = Number(localStorage.getItem('userId'));
  orders! :Orders[];

  ngOnInit(): void {
    this.getPastOrders(this.userId);
  }

  getPastOrders(id : any){
    return this.washerService.getPastOrders(id)
               .subscribe(res => {
                this.orders = res;
               },
               err => {
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Something went wrong! Unable to fetch past orders.',
                  //footer: '<a href="">Why do I have this issue?</a>'
                })
               });
  }
}
