import { Component, OnInit } from '@angular/core';
import { GetAllWasher } from 'src/app/models/getAllWasher';
import { AdminService } from 'src/app/service/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-washer',
  templateUrl: './all-washer.component.html',
  styleUrls: ['./all-washer.component.css']
})
export class AllWasherComponent implements OnInit {

  userId=Number(localStorage.getItem('userId'));
  washer:GetAllWasher[]=[];
  constructor(private adminService:AdminService) { }
  role = localStorage.getItem('role');

  ngOnInit(): void {
    this.adminService.getAllWasher()
    .subscribe({
      next:(washer)=>{
       this.washer=washer;
       console.log(washer);
      },
      error:(response)=>{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong! Unable to fetch washer details!',
          //footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    })
  }
  //change status of customer
  changeStatus(i:number){
    if(this.washer[i].status=='Active'){
      this.washer[i].status='InActive'

      this.adminService.washerStatus(this.washer[i])
      .subscribe()

    }
    else{
       this.washer[i].status='Active'
      this.adminService.washerStatus(this.washer[i])
      .subscribe()
    }



  }


}
