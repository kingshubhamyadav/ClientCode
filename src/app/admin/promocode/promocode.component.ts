import { Component, OnInit } from '@angular/core';
import { GetPromoCode } from 'src/app/models/getPromoCode';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-promocode',
  templateUrl: './promocode.component.html',
  styleUrls: ['./promocode.component.css']
})
export class PromocodeComponent implements OnInit {

  promo:GetPromoCode[]=[];
  constructor(private adminService:AdminService) { }


  ngOnInit(): void {
    this.adminService.getAllPromocode()
    .subscribe({
      next:(promo)=>{
       this.promo=promo;
       console.log(promo);
      },
      error:(response)=>{
        console.log(response);
      }
    })
  }

}
