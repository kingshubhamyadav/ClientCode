import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  title='Invoice';
  constructor() { }
  role=localStorage.getItem('role');

  totalDiscount= Number(localStorage.getItem('totalDiscount'));
  serviceAmount=Number(localStorage.getItem('amountPaid'))+this.totalDiscount;
  totalAmount=Number(localStorage.getItem('amountPaid'));
  dateAndTime=localStorage.getItem('dateWashInv')

  email=localStorage.getItem('email');
  phone=localStorage.getItem('phone');
  name=localStorage.getItem('name');

  ngOnInit(): void {

  }

}
