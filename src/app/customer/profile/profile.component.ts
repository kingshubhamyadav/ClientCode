import { Component, OnInit } from '@angular/core';
import { GetUser } from 'src/app/models/getUser';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  title='Profile';
  userId=Number(localStorage.getItem('userId'));

  user:GetUser[]=[];
  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
    this.customerService.getUser(this.userId)
    .subscribe({
      next:(user)=>{
       this.user=user;
       console.log(user);
      },
      error:(response)=>{
        console.log(response);
      }
    })
  }

}
