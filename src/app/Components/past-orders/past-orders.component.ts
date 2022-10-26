import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Orders } from 'src/app/Models/orders.model';
import { WasherApiService } from 'src/app/Services/washer-api.service';

@Component({
  selector: 'app-past-orders',
  templateUrl: './past-orders.component.html',
  styleUrls: ['./past-orders.component.css']
})
export class PastOrdersComponent implements OnInit {

  constructor(private router : Router,private washerService : WasherApiService) { }
  orders! :Orders[];

  ngOnInit(): void {
    this.getPastOrders();
  }

  getPastOrders(){
    return this.washerService.getPastOrders()
               .subscribe(res => {
                this.orders = res;
               });
  }
}
