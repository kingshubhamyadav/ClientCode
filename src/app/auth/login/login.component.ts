import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/service/auth.service';
import jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'login';
  user= new User();
  constructor(private authService:AuthService) { }
  //decode method for jwt token
  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch(Error) {
      return null;
    }
  }

  ngOnInit(): void {
  }
  login(user:User){
    this.authService.login(user).subscribe(
      (token:string)=>{
        const tokenInfo = this.getDecodedAccessToken(token);
        console.log(tokenInfo);
        console.log(tokenInfo['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']);

        localStorage.setItem('role',tokenInfo['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']);
        localStorage.setItem('userId',tokenInfo['http://schemas.microsoft.com/ws/2008/06/identity/claims/userdata']);
        localStorage.setItem('email',tokenInfo['http://schemas.microsoft.com/ws/2008/06/identity/claims/emailaddress']);
        localStorage.setItem('phone',tokenInfo['http://schemas.microsoft.com/ws/2008/06/identity/claims/mobilephone']);
        localStorage.setItem('authToken',token);
      });
  }
  weather(){
    this.authService.weather().subscribe((summary:string)=>{
      console.log(summary);
    });
  }
}
