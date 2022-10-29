import { Component, OnInit } from '@angular/core';
import { WasherApiService } from 'src/app/Services/washer-api.service';
import { Router } from '@angular/router';
import { Orders } from 'src/app/Models/orders.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-current-orders',
  templateUrl: './current-orders.component.html',
  styleUrls: ['./current-orders.component.css']
})
export class CurrentOrdersComponent implements OnInit {

  constructor(private router : Router,private washerService : WasherApiService) { }
  role = localStorage.getItem('role');
  orders! : Orders[];

  ngOnInit(): void {
    this.getCurrentOrders();
  }

  getCurrentOrders(){
    this.washerService.getCurrentOrders()
        .subscribe(res =>{
          this.orders = res;
        },
        err => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong! Unable to fetch orders.',
            //footer: '<a href="">Why do I have this issue?</a>'
          })
        });
  }

}
