import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRegister } from 'src/app/models/userRegister';
import { AuthService } from 'src/app/service/auth.service';

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
    this.authService.register(user).subscribe();
    this.router.navigate(['/login']);
  }

}
