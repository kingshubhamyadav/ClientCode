import { Component, OnInit } from '@angular/core';
import { GetUser } from 'src/app/Models/getUser';
import { CustomerService } from 'src/app/service/customer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Profile } from 'src/app/Models/profile.model';
import { profileImage } from 'src/app/Models/profileImage.model';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  title = 'Profile';
  userId = Number(localStorage.getItem('userId'));

  user: GetUser = new GetUser();
  constructor(private router: Router, private customerService: CustomerService, private formBuilder: FormBuilder) { }
  role = localStorage.getItem('role');
  formValue!: FormGroup;
  userObj: GetUser = new GetUser();
  imageObj: profileImage = new profileImage();
  imgUrl = "";

  ngOnInit(): void {
    let id = localStorage.getItem('userId');
    this.getProfileInfo(id);

    this.formValue = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: [`${this.user.phone}`, [Validators.required, Validators.pattern("^[0-9]{10}$")]],
    })
  }

  getProfileInfo(id: any) {
    return this.customerService.getUser(this.userId)
      .subscribe(res => {
        this.user = res;
        this.imgUrl = res.img;
      },
        err => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong! Unable to fetch user!',
            //footer: '<a href="">Why do I have this issue?</a>'
          })
        })
    //   {
    //   next: (user) => {
    //     this.user = user;
    //     console.log(user);
    //   },
    //   error: (response) => {
    //     Swal.fire({
    //       icon: 'error',
    //       title: 'Oops...',
    //       text: 'Something went wrong! Unable to fetch user!',
    //       //footer: '<a href="">Why do I have this issue?</a>'
    //     })
    //   }
    // })
  }

  onEdit(user: GetUser) {
    this.formValue.controls['firstName'].setValue(this.user.firstName)
    this.formValue.controls['lastName'].setValue(this.user.lastName)
    this.formValue.controls['email'].setValue(this.user.email)
    this.formValue.controls['phoneNumber'].setValue(this.user.phone)
  }

  editProfile(id: any) {
    this.userObj.userId = this.user.userId;
    this.userObj.firstName = this.formValue.value.firstName;
    this.userObj.lastName = this.formValue.value.lastName;
    this.userObj.email = this.formValue.value.email;
    this.userObj.phone = this.formValue.value.phoneNumber;
    this.userObj.img = this.imgUrl;

    this.customerService.updateProfile(id, this.userObj)
      .subscribe(res => {
        Swal.fire({
          icon: 'success',
          title: 'Profile information updated successfully.'
          //footer: '<a href="">Why do I have this issue?</a>'
        })
        let ref = document.getElementById('cancel');
        ref?.click();
        this.formValue.reset();
        this.getProfileInfo(id);
      },
        err => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong! Unable to edit profile information.',
            //footer: '<a href="">Why do I have this issue?</a>'
          })
        })

  }

  onSelectFile(e: any) {
    if (e.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.imgUrl = event.target.result;
        this.imageObj.img = this.imgUrl;
        this.imageObj.userId = this.user.userId;
        this.customerService.uploadPhoto(this.imageObj)
          .subscribe(res => {
            Swal.fire({
              icon: 'success',
              title: 'Profile image added successfully.'
              //footer: '<a href="">Why do I have this issue?</a>'
            })
          },
            err => {
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong! Unable to upload profile image.',
                //footer: '<a href="">Why do I have this issue?</a>'
              })
            })
      }
    }
  }

  uploadPhoto() {
    let ref = document.getElementById('fileUpload');
    ref?.click();
  }

}
