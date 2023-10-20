import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Login } from 'src/app/models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  showPassword: boolean = false;

  @ViewChild('f', {static: true}) loginForm = {} as NgForm;
  loginData: Login = {} as Login;


  ngOnInit(): void {
    
  }

  onSubmit() {
    this.loginData.email = this.loginForm.value.email;
    this.loginData.password = this.loginForm.value.password;
    console.log(this.loginData);
  }

  onShowPassword(): void {
    this.showPassword = !this.showPassword;
  }

}
