import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('gallerylogin')
  gallerylogin: any;

  customValidation: any;

  customMinLength = 2;

  constructor(private router: Router) { 
    this.customValidation = {
      username: ['', Validators.compose([Validators.required, Validators.minLength(this.customMinLength)])],
      password: ['', Validators.required]
    };
  }

  ngOnInit() {
    this.gallerylogin.addCustomValidationError('username', 'required', 'User name is required');
    this.gallerylogin.addCustomValidationError('username', 'minlength', 'User name should be of atleast 2 characters', {minLength: this.customMinLength});
    this.gallerylogin.addCustomValidationError('password', 'required', 'Please enter the password');
  }

  goToGallery() {
    this.router.navigate(['/gallery']);
  }
}
