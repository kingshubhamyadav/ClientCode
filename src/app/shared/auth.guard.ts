import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  //auth services is injected
  constructor(private auth:AuthService,private router:Router ) {}
  //return true or false based on condition
  canActivate(){
    if(this.auth.IsLoggedIn()){
        return true;
    }
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Seems like you are trying to access this page without logging in. Login and try again.',
      //footer: '<a href="">Why do I have this issue?</a>'
    })
    this.router.navigate(['login']);
    return false;
  }

}
