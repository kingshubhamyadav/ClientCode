import { Component, OnInit } from '@angular/core';
import { Orders } from 'src/app/Models/orders.model';
import { WasherApiService } from 'src/app/Services/washer-api.service';
import { Router } from '@angular/router';
import { Invoice } from 'src/app/Models/invoiceList.models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { afterWash } from 'src/app/Models/washComplete.model';
import { concatWith } from 'rxjs';

@Component({
  selector: 'app-invoice-generation',
  templateUrl: './invoice-generation.component.html',
  styleUrls: ['./invoice-generation.component.css']
})
export class InvoiceGenerationComponent implements OnInit {

  constructor(private router: Router, private washerService: WasherApiService,
    private formBuilder: FormBuilder) { }
  invoices!: Invoice[];
  formValue!: FormGroup;
  afterWashObj: afterWash = new afterWash();
  imgUrl = "";
  hasImage : boolean = false;

  ngOnInit(): void {
    this.getInvoiceList();

    this.formValue = this.formBuilder.group({
      orderId: [''],
      waterUsed: ['',Validators.required],
      carImg : ['',Validators.required]
    })
  }

  //service call to get the list of incompleted wash orders
  getInvoiceList() {
    this.washerService.getInvoiceList()
      .subscribe(data => {
        this.invoices = data;
      })
  }

  //service call to post the details of car to DB after a wash is completed
  postInvoiceDetails() {
    this.afterWashObj.orderId = this.formValue.value.orderId;
    this.afterWashObj.waterUsed = this.formValue.value.waterUsed;

    this.washerService.postInvoiceDetails(this.afterWashObj)
      .subscribe(res => {
        alert("Invoice details added successfully!");
        let ref = document.getElementById('cancel');
        ref?.click();
        this.formValue.reset();
        this.getInvoiceList();
      },
        err => {
          alert("Error in sending invoice details. Something went wrong!");
        })
  }

  //service call to get auto-filled fields in the modal
  fill(row : any){
    this.formValue.controls['orderId'].setValue(row.orderId);
  }
  
  //function to upload afterwash image
  onSelectFile(e  : any){
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event : any) => {
        this.imgUrl = event.target.result;
        this.hasImage = true;
        this.afterWashObj.carImg = this.imgUrl;
        alert("Image uploaded successfully!");
      }
    }
  }

  uploadPhoto(){
    let ref = document.getElementById('fileUpload');
    ref?.click();
  }
}
