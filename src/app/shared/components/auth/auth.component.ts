import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  hasAccount: boolean = true;
  loginForm! : FormGroup;
  signUpForm! : FormGroup;

  constructor(private authServ : AuthService, private router : Router) { }

  ngOnInit(): void {
    this.createLoginForm();
    this.createsignUpForm()
  }

  createLoginForm(){
    this.loginForm = new FormGroup({
      email : new FormControl(null,[Validators.required]),
      password : new FormControl(null,[Validators.required])
    })
  }

  onLogin(){
    if(this.loginForm.valid){
      let loginObj = this.loginForm.value;
      this.authServ.isLogin(loginObj);
      this.router.navigate(['home'])
    }
    else{
      alert('Please Enter Valid Details')
    }
  }

  createsignUpForm(){
    this.signUpForm = new FormGroup({
      email : new FormControl(null,[Validators.required]),
      contact : new FormControl(null,[Validators.required]),
      password : new FormControl(null,[Validators.required]),
      Cpassword : new FormControl(null,[Validators.required])
    })
  }

  onSignUp(){
    this.router.navigate(['home'])
  }
}
