import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'routingTestwithAuth';

  isLoggedIn! : boolean ;

  constructor(private authServ : AuthService){}

  ngOnInit(): void {
    this.authServ.loginStatusAsObs$
    .subscribe(res => {
      this.isLoggedIn = res;
    })
  }

  
}
