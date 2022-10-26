import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'login';
  user= new User();
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }
  login(user:User){
    this.authService.login(user).subscribe(
      (token:string)=>{
        localStorage.setItem('authToken',token);
      });
  }
  weather(){
    this.authService.weather().subscribe((summary:string)=>{
      console.log(summary);
    });
  }
}
