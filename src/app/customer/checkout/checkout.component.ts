import { Component, OnInit } from '@angular/core';
import { Checkout } from 'src/app/models/checkout';
import { PromoCode } from 'src/app/models/promoCode';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  title='Checkout';
  totalAmount:number=2000;
  promo= new PromoCode();
  checkout= new Checkout();

  discount:string='0';
  discountApplied:boolean=false;
  coupenMessage:string='';
  constructor(private customrServices:CustomerService) { }

  ngOnInit(): void {
  }
  getPromoCode(promo:PromoCode){
    this.customrServices.getPromoCode(promo).subscribe({
      next:(discount:string)=>{
        if(this.discountApplied){
          this.checkout.amountPaid=this.totalAmount.toString();
        }
        else{
        this.discount=discount;
        this.checkout.code=promo.code;
        this.checkout.totalDiscount=discount;
        this.discountApplied=true;
        this.totalAmount=this.totalAmount-Number(discount)
        }
        this.coupenMessage='Coupen Code Applied Successfully. Discount= '+discount +'₹';
      },
      error:(response)=>{
        this.coupenMessage = response.error;
      }
    });
  }
  checkoutInfo(checkout:Checkout){
    this.checkout.amountPaid=this.totalAmount.toString();
    this.customrServices.checkoutInfo(checkout).subscribe({
      next:(info :Checkout)=>{
        this.checkout=info;
        console.log(info);
      }
    });
  }

}
