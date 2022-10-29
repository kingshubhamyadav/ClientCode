import { Component, OnInit } from '@angular/core';
import { Orders } from 'src/app/Models/orders.model';
import { WasherApiService } from 'src/app/Services/washer-api.service';
import { Router } from '@angular/router';
import { Invoice } from 'src/app/Models/invoiceList.models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { afterWash } from 'src/app/Models/washComplete.model';
import { concatWith } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-invoice-generation',
  templateUrl: './invoice-generation.component.html',
  styleUrls: ['./invoice-generation.component.css']
})
export class InvoiceGenerationComponent implements OnInit {

  constructor(private router: Router, private washerService: WasherApiService,
    private formBuilder: FormBuilder) { }
  role = localStorage.getItem('role');

  invoices!: Invoice[];
  formValue!: FormGroup;
  afterWashObj: afterWash = new afterWash();
  imgUrl = "";
  hasImage: boolean = false;

  ngOnInit(): void {
    this.getInvoiceList();

    this.formValue = this.formBuilder.group({
      orderId: [''],
      waterUsed: ['', Validators.required],
      carImg: ['', Validators.required]
    })
  }

  //service call to get the list of incompleted wash orders
  getInvoiceList() {
    this.washerService.getInvoiceList()
      .subscribe(data => {
        this.invoices = data;
      },
      err => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong! Unable to fetch invoices.',
          //footer: '<a href="">Why do I have this issue?</a>'
        })
      })
  }

  //service call to post the details of car to DB after a wash is completed
  postInvoiceDetails() {
    this.afterWashObj.orderId = this.formValue.value.orderId;
    this.afterWashObj.waterUsed = this.formValue.value.waterUsed;

    this.washerService.postInvoiceDetails(this.afterWashObj)
      .subscribe(res => {
        Swal.fire({
          icon: 'success',
          title: 'Wash complete details added successfully.'
          //footer: '<a href="">Why do I have this issue?</a>'
        })
        let ref = document.getElementById('cancel');
        ref?.click();
        this.formValue.reset();
        this.getInvoiceList();
      },
        err => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            //footer: '<a href="">Why do I have this issue?</a>'
          })
        })
  }

  onSelectFile(e  : any){
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event : any) => {
        this.imgUrl = event.target.result;
        this.hasImage = true;
        this.afterWashObj.carImg = this.imgUrl;
        Swal.fire({
          icon: 'success',
          title: 'After wash car image added successfully.'
          //footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    }
  }

  uploadPhoto(){
    let ref = document.getElementById('fileUpload');
    ref?.click();
  }

  //service call to get auto-filled fields in the modal
  fill(row: any) {
    this.formValue.controls['orderId'].setValue(row.orderId);
  }
}
