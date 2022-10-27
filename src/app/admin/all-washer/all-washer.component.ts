import { Component, OnInit } from '@angular/core';
import { GetAllWasher } from 'src/app/models/getAllWasher';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-all-washer',
  templateUrl: './all-washer.component.html',
  styleUrls: ['./all-washer.component.css']
})
export class AllWasherComponent implements OnInit {

  userId=Number(localStorage.getItem('userId'));
  washer:GetAllWasher[]=[];
  constructor(private adminService:AdminService) { }


  ngOnInit(): void {
    this.adminService.getAllWasher()
    .subscribe({
      next:(washer)=>{
       this.washer=washer;
       console.log(washer);
      },
      error:(response)=>{
        console.log(response);
      }
    })
  }

}
