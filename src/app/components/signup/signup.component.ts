import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Login } from 'src/app/models/login.model';
import { Signup } from 'src/app/models/signup.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;

  signupForm: FormGroup = {} as FormGroup;

  signupData: Signup = {} as Signup;

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(
          '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,100}$'
        )
      ]),
      'confirmPassword': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    this.signupData.name = this.signupForm.get('name')?.value;
    this.signupData.email = this.signupForm.get('email')?.value;
    this.signupData.password = this.signupForm.get('password')?.value;
    console.log(this.signupData);
  }

  onShowPassword(): void {
    this.showPassword = !this.showPassword;
  }

  onShowConfirmPassword(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  checkFormValidityForSubmitButton() {
    const password = this.signupForm.get('password')?.value;
    const confirmPassword = this.signupForm.get('confirmPassword')?.value;
    if(password === confirmPassword && this.signupForm.valid) return false;
    return true;
  }
}
