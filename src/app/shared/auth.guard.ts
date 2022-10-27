import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

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
    alert("You have not loged In")
    this.router.navigate(['login']);
    return false;
  }

}
