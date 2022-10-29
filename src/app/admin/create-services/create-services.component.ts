import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateService } from 'src/app/models/createService';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-create-services',
  templateUrl: './create-services.component.html',
  styleUrls: ['./create-services.component.css']
})
export class CreateServicesComponent implements OnInit {
  title='Create Service';
  ser= new CreateService();
  constructor(private adminService:AdminService, private router:Router) { }

  ngOnInit(): void {
  }
  serviceInfo(ser:CreateService){
    this.adminService.createService(ser).subscribe();
   // this.router.navigate(['/all-services']);
  }


}
