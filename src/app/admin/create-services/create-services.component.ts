import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateService } from 'src/app/models/createService';
import { AdminService } from 'src/app/service/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-services',
  templateUrl: './create-services.component.html',
  styleUrls: ['./create-services.component.css']
})
export class CreateServicesComponent implements OnInit {
  title='Create Service';
  ser= new CreateService();
  constructor(private adminService:AdminService, private router:Router) { }
  role = localStorage.getItem('role');

  ngOnInit(): void {
  }
  serviceInfo(ser:CreateService){
    this.adminService.createService(ser).subscribe(res => {
      Swal.fire({
        icon: 'success',
        title: 'Service added successfully',
        //footer: '<a href="">Why do I have this issue?</a>'
      })
      this.router.navigate(['/all-services']);
    },
    err => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong! Unable to create service.',
        //footer: '<a href="">Why do I have this issue?</a>'
      })
    });
    //this.router.navigate(['/adminHome']);
  }


}
