import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-washer-navbar',
  templateUrl: './washer-navbar.component.html',
  styleUrls: ['./washer-navbar.component.css']
})
export class WasherNavbarComponent implements OnInit {

  constructor(private router: Router) { }

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
