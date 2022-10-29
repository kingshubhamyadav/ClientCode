import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRegister } from 'src/app/Models/userRegister';
import { AuthService } from 'src/app/service/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  title='Register';
  user= new UserRegister();
  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
  }
  
  register(user:UserRegister){
    this.authService.register(user).subscribe(err=>
      {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong! Please register again.',
          //footer: '<a href="">Why do I have this issue?</a>'
        })
      });
    this.router.navigate(['/login']);
  }

}
