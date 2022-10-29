import { Component, OnInit } from '@angular/core';
import { GetUser } from 'src/app/Models/getUser';
import { CustomerService } from 'src/app/service/customer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Profile } from 'src/app/Models/profile.model';
import { profileImage } from 'src/app/Models/profileImage.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  title='Profile';
  userId=Number(localStorage.getItem('userId'));

  user:GetUser[]=[];
  constructor(private customerService:CustomerService, private formBuilder : FormBuilder) { }
  role=localStorage.getItem('role');
  formValue!: FormGroup;
  profiles!: Profile;
  profileObj: Profile = new Profile();
  imageObj : profileImage = new profileImage();

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', [Validators.required,Validators.pattern("^[0-9]{10}$")]],
    })

    
    this.customerService.getUser(this.userId)
    .subscribe({
      next:(user)=>{
       this.user=user;
       console.log(user);
      },
      error:(response)=>{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong! Unable to fetch user!',
          //footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    })
  }

  onEdit(profiles: Profile) {
    this.formValue.controls['firstName'].setValue(this.user[0].firstName)
    this.formValue.controls['lastName'].setValue(this.user[0].lastName)
    this.formValue.controls['email'].setValue(this.user[0].email)
    this.formValue.controls['phoneNumber'].setValue(this.user[0].phone)
  }

  editProfile(id: any) {
    this.profileObj.userId = this.profiles.userId;
    this.profileObj.firstName = this.formValue.value.firstName;
    this.profileObj.lastName = this.formValue.value.lastName;
    this.profileObj.email = this.formValue.value.email;
    this.profileObj.phoneNumber = this.formValue.value.phoneNumber;
    this.profileObj.pincode = this.formValue.value.pincode;
    this.profileObj.city = this.formValue.value.city;
    this.profileObj.state = this.formValue.value.state;

    // this.washerService.updateProfile(id, this.profileObj)
    //   .subscribe(res => {
    //     Swal.fire({
    //       icon: 'success',
    //       title: 'Profile information updated successfully.'
    //       //footer: '<a href="">Why do I have this issue?</a>'
    //     })
    //     let ref = document.getElementById('cancel');
    //     ref?.click();
    //     this.formValue.reset();
    //     this.getProfileInfo(id);
    //   },
    //   err => {
    //     Swal.fire({
    //       icon: 'error',
    //       title: 'Oops...',
    //       text: 'Something went wrong! Unable to edit profile information.',
    //       //footer: '<a href="">Why do I have this issue?</a>'
    //     })
    //   })
  }

}
