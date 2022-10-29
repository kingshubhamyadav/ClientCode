import { Component, OnInit } from '@angular/core';
import { RouteConfigLoadEnd, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
logout(){
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't to logout!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, Logout!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Loged out!',
        'success'
      )
      localStorage.clear();
      this.router.navigate(['/login'])
    }
  })

}
}
