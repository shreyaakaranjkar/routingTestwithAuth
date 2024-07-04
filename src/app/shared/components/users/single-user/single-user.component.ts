import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/shared/const/user';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.scss']
})
export class SingleUserComponent implements OnInit {

  constructor(private route : ActivatedRoute, private userServ : UsersService){
    // this.route.data
    // .subscribe(res =>{
    //   this.userObj = res['userInfo']
    // })
  }
  userId! : string;
  userObj! : IUser;

  ngOnInit(): void {
    // console.log(this.userObj)

    this.route.params
    .subscribe(res => {
      console.log(res)
      this.userId = res['userId'];
      this.userObj = this.userServ.getSingleUser(this.userId)
    })
  }

}
