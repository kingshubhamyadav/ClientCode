import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CustomerGuard implements CanActivate {
  constructor(private router:Router ) {}
  canActivate(){
    let role = localStorage.getItem("role");
    if(role=='Customer'){
    return true;
    }
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Seems like you do not have access rights to this page. Login as a customer to access page.',
      //footer: '<a href="">Why do I have this issue?</a>'
    })
    this.router.navigate(['/not-found']);
    return false;
  }

}
