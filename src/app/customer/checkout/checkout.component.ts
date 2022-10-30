import { Component, OnInit } from '@angular/core';
import { Checkout } from 'src/app/models/checkout';
import { PromoCode } from 'src/app/models/promoCode';
import { allWasher } from 'src/app/models/allWasher';
import { CustomerService } from 'src/app/service/customer.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { profileImage } from 'src/app/models/profileImage.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  title = 'Checkout';
  baseAmount: number = Number(localStorage.getItem('charges'));
  totalAmount: number = Number(localStorage.getItem('charges'));
  washTypeId: number = Number(localStorage.getItem('washTypeId'));
  serviceName = localStorage.getItem('serviceName');
  promo = new PromoCode();
  checkout = new Checkout();
  washers: allWasher[] = [];

  discount: string = '0';
  discountApplied: boolean = false;
  coupenMessage: string = '';
  userId = Number(localStorage.getItem('userId'));
  constructor(private customrServices: CustomerService, private router: Router) { }
  role = localStorage.getItem('role');
  imgUrl = "";

  ngOnInit(): void {
  }
  getPromoCode(promo:PromoCode){
    promo.userId=Number(localStorage.getItem('userId'));
    this.customrServices.getPromoCode(promo).subscribe({
      next: (discount: string) => {
        if (this.discountApplied) {
          this.checkout.amountPaid = this.totalAmount.toString();
        }
        else {
          this.discount = discount;
          this.checkout.code = promo.code;
          this.checkout.totalDiscount = discount;
          this.discountApplied = true;
          this.totalAmount = this.totalAmount - Number(discount)
        }
        this.coupenMessage = 'Coupen Code Applied Successfully. Discount= ' + discount + '₹';
      },
      error: (response) => {
        this.coupenMessage = response.error;
      }
    });
  }
  checkoutInfo(checkout:Checkout){
    this.checkout.userId= this.userId;
    this.checkout.washTypeId= Number(localStorage.getItem('washTypeId'));
    this.checkout.code= this.promo.code;
    this.checkout.washerUserId= Number(localStorage.getItem('washTypeId'));
    this.checkout.amountPaid=this.totalAmount.toString();
    this.checkout.amountPaid=this.discount.toString();
    this.customrServices.checkoutInfo(checkout).subscribe({
      next: (info: Checkout) => {
        this.checkout = info;
        Swal.fire({
          icon: 'success',
          title: 'Order placed successfully.'
          //footer: '<a href="">Why do I have this issue?</a>'
        })
        this.router.navigate(['/orderHistory']);
      },
      error: (response) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong! Unable to place order at the moment.',
          //footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    });
  }

  onSelectFile(e: any) {
    if (e.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.imgUrl = event.target.result;
        this.checkout.carImg = this.imgUrl;
        Swal.fire({
          icon: 'success',
          title: 'Car image added successfully.'
          //footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    }
  }

}
