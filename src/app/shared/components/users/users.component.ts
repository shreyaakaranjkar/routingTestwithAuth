import { Component, OnInit } from '@angular/core';
import { IUser } from '../../const/user';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private userServ : UsersService) { }

  userArr! : Array<IUser>
  selId! : string
  ngOnInit(): void {
    this.userArr = this.userServ.fetchAllUsers()
  }

}
