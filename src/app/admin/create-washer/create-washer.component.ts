import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateWasher } from 'src/app/models/createWasher';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-create-washer',
  templateUrl: './create-washer.component.html',
  styleUrls: ['./create-washer.component.css']
})
export class CreateWasherComponent implements OnInit {
  title='Create Washer';
  user= new CreateWasher();
  constructor(private adminService:AdminService, private router:Router) { }

  ngOnInit(): void {
  }
  washerInfo(user:CreateWasher){
    this.adminService.createWasher(user).subscribe();
    this.router.navigate(['/all-washer']);
  }

}
