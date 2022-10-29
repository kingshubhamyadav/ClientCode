import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateWasher } from 'src/app/Models/createWasher';
import { AdminService } from 'src/app/service/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-washer',
  templateUrl: './create-washer.component.html',
  styleUrls: ['./create-washer.component.css']
})
export class CreateWasherComponent implements OnInit {
  title='Create Washer';
  user= new CreateWasher();
  constructor(private adminService:AdminService, private router:Router) { }
  role = localStorage.getItem('role');

  ngOnInit(): void {
  }
  washerInfo(user:CreateWasher){
    this.adminService.createWasher(user).subscribe(res => {
      Swal.fire({
        icon: 'success',
        title: 'Washer created successfully',
        //footer: '<a href="">Why do I have this issue?</a>'
      })
      this.router.navigate(['/all-washer']);
    },
    err => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong! Unable to create washer!',
        //footer: '<a href="">Why do I have this issue?</a>'
      })
    });
    //this.router.navigate(['/adminHome']);
  }

}
