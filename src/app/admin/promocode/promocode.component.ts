import { Component, OnInit } from '@angular/core';
import { GetPromoCode } from 'src/app/Models/getPromoCode';
import { AdminService } from 'src/app/service/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-promocode',
  templateUrl: './promocode.component.html',
  styleUrls: ['./promocode.component.css']
})
export class PromocodeComponent implements OnInit {

  promo:GetPromoCode[]=[];
  constructor(private adminService:AdminService) { }
  role = localStorage.getItem('role');

  ngOnInit(): void {
    this.adminService.getAllPromocode()
    .subscribe({
      next:(promo)=>{
       this.promo=promo;
       console.log(promo);
      },
      error:(response)=>{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong! Unable to fetch promocodes!',
          //footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    })
  }

}
