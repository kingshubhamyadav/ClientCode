import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import jwt_decode from 'jwt-decode';
import { User } from 'src/app/models/user';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'login';
  user= new User();
  constructor(private authService:AuthService,private router:Router) { }
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

        localStorage.setItem('role',tokenInfo['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']);
        localStorage.setItem('userId',tokenInfo['http://schemas.microsoft.com/ws/2008/06/identity/claims/userdata']);
        localStorage.setItem('email',tokenInfo['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress']);
        localStorage.setItem('phone',tokenInfo['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/mobilephone']);
        localStorage.setItem('name',tokenInfo['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name']);
        localStorage.setItem('authToken',token);
        if( localStorage.getItem('role')=='Customer'){
        this.router.navigate(['/home']);
        }
        if( localStorage.getItem('role')=='Washer'){
          this.router.navigate(['/dashboard']);
        }
        if( localStorage.getItem('role')=='Admin'){
          this.router.navigate(['/adminHome']);
          }
          //notify pop up
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })

          Toast.fire({
            icon: 'success',
            title: 'Signed in successfully'
          })

      },
      err => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong! Sign In again.',
          //footer: '<a href="">Why do I have this issue?</a>'
        })
      });

  }
  weather(){
    this.authService.weather().subscribe((summary:string)=>{
      console.log(summary);
    });
  }
}
