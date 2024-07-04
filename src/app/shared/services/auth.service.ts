import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginStatus : boolean = false;
  private loginStatus$ : Subject<boolean> = new Subject<boolean>();
  loginStatusAsObs$ = this.loginStatus$.asObservable()
  constructor(private router : Router) {
    localStorage.setItem('Token','JWT Token')
   }


  isAuthentic(){
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        if(localStorage.getItem("Token")){
          this.loginStatus = true;
        }
        else{
          this.loginStatus = false;
          this.loginStatus$.next(false);
          this.router.navigate([''])
        }
        resolve(this.loginStatus)
      }, 1000);
    })
  }
  isLogin(obj:any){

    this.loginStatus = true;
    
   if(obj.email === 'john'){
    localStorage.setItem('UserRole','Buyer')
    localStorage.setItem('Token','JWT Token')
    this.loginStatus$.next(this.loginStatus)
    this.router.navigate(['home'])
   }
   else if(obj.email === 'july'){
    localStorage.setItem('UserRole','Admin')
    localStorage.setItem('Token','JWT Token')
    this.loginStatus$.next(true)
    this.router.navigate(['home'])
   }
   else if(obj.email === 'mary'){
    localStorage.setItem('UserRole','SuperAdmin')
    localStorage.setItem('Token','JWT Token')
    this.loginStatus$.next(true)
    this.router.navigate(['home'])
   }
  }

  isLogOut(){
    this.loginStatus = false;
    localStorage.removeItem('Token');
    localStorage.removeItem('UserRole');
    this.router.navigate([''])
    this.loginStatus$.next(false)
  }
}
