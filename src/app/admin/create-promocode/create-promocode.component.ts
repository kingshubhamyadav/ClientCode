import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreatePromocode } from 'src/app/Models/createPromo';
import { AdminService } from 'src/app/service/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-promocode',
  templateUrl: './create-promocode.component.html',
  styleUrls: ['./create-promocode.component.css']
})
export class CreatePromocodeComponent implements OnInit {
  title='Create Promocode';
  promo =new CreatePromocode();
  constructor(private adminService:AdminService,private router:Router) { }
  role = localStorage.getItem('role');

  ngOnInit(): void {
  }

  createPromocodeInfo(promo:CreatePromocode){
    promo.status='Active';
    this.adminService.createPromocode(promo).subscribe({
      next:(info :CreatePromocode)=>{
        Swal.fire({
          icon: 'success',
          title: 'Promocode created successfully',
          //footer: '<a href="">Why do I have this issue?</a>'
        })
        this.router.navigate(['/all-promocode']);
      },
      error:(response)=>{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong! Unable to create promocode!',
          //footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    });
  }

}
