import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreatePromocode } from 'src/app/models/createPromo';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-create-promocode',
  templateUrl: './create-promocode.component.html',
  styleUrls: ['./create-promocode.component.css']
})
export class CreatePromocodeComponent implements OnInit {
  title='Create Promocode';
  promo =new CreatePromocode();
  constructor(private adminService:AdminService,private router:Router) { }

  ngOnInit(): void {
  }

  createPromocodeInfo(promo:CreatePromocode){
    promo.status='Avctive';
    this.adminService.createPromocode(promo).subscribe({
      next:(info :CreatePromocode)=>{
        console.log(info);
        this.router.navigate(['/all-promocode']);
      }
    });
  }

}
