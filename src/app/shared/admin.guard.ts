import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router:Router ) {}
  canActivate(){
    let role = localStorage.getItem("role");
    if(role=='Admin'){
    return true;
    }
    alert("You dont have rights to access");
    this.router.navigate(['/not-found']);
    return false;
  }

}
