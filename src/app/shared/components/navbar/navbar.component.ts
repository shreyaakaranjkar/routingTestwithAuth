import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private authServ:AuthService) { }

  getUserRole! : string;


  ngOnInit() {
    this.getUserRole = localStorage.getItem("UserRole") as string
  }

  onLogOut(){
    this.authServ.isLogOut()
  }
}
