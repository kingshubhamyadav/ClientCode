import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WasherApiService } from 'src/app/Services/washer-api.service';
import { Profile } from 'src/app/models/profile.model';
import { profileImage } from 'src/app/models/profileImage.model';

@Component({
  selector: 'app-washer-profile',
  templateUrl: './washer-profile.component.html',
  styleUrls: ['./washer-profile.component.css']
})
export class WasherProfileComponent implements OnInit {

  formValue!: FormGroup;
  constructor(private formBuilder: FormBuilder, private washerService: WasherApiService) { }
  profiles!: Profile;
  profileObj: Profile = new Profile();
  imageObj : profileImage = new profileImage();
  imgUrl = ""

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', [Validators.required,Validators.pattern("^[0-9]{10}$")]],
      pincode: ['', [Validators.required,Validators.pattern("^[0-9]{6}$")]],
      city: ['', Validators.required],
      state: ['', Validators.required]
    })

    //let id = localStorage.getItem('userId');
    let id = 1;
    this.getProfileInfo(id);
  }

  getProfileInfo(id: any) {
    return this.washerService.getProfile(id)
      .subscribe(res => {
        this.profiles = res;
        //console.log(this.profiles.phoneNumber);
        this.imgUrl = this.profiles.img;
      });
  }

  onEdit(profiles: Profile) {
    this.formValue.controls['firstName'].setValue(profiles.firstName)
    this.formValue.controls['lastName'].setValue(profiles.lastName)
    this.formValue.controls['email'].setValue(profiles.email)
    this.formValue.controls['phoneNumber'].setValue(profiles.phoneNumber)
    this.formValue.controls['pincode'].setValue(profiles.pincode)
    this.formValue.controls['city'].setValue(profiles.city)
    this.formValue.controls['state'].setValue(profiles.state)
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

    this.washerService.updateProfile(id, this.profileObj)
      .subscribe(res => {
        alert("Profile updated successfully!");
        let ref = document.getElementById('cancel');
        ref?.click();
        this.formValue.reset();
        this.getProfileInfo(id);
      })
  }

  onSelectFile(e  : any){
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event : any) => {
        this.imgUrl = event.target.result;
        this.imageObj.img = this.imgUrl;
        this.imageObj.userId = this.profiles.userId;
        this.washerService.uploadPhoto(this.imageObj)
            .subscribe(res => {
              alert("Profile photo updated successfully!");
            },
            err => {
              alert("Profile photo upload failed! Something went wrong.");
            })
      }
    }
  }

  uploadPhoto(){
    let ref = document.getElementById('fileUpload');
    ref?.click();
  }
}
