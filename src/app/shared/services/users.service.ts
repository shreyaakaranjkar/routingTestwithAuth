import { Injectable } from '@angular/core';
import { IUser } from '../const/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  usersArr : Array<IUser>=[
    {
      userName : 'John',
      userImage : 'https://pluspng.com/img-png/user-png-icon-young-user-icon-2400.png',
      userId : '101',
      userRole : 'Admin'
    },
    {
      userName : 'July',
      userImage : 'https://www.emmegi.co.uk/wp-content/uploads/2019/01/User-Icon.jpg',
      userId : '102',
      userRole : 'User'
    },
    {
      userName : 'Jenny',
      userImage : 'https://pluspng.com/img-png/user-png-icon-young-user-icon-2400.png',
      userId : '103',
      userRole : 'Admin'
    },
  ]

  fetchAllUsers(){
    return this.usersArr
  }

  //getSingleUser
  getSingleUser(id:string):IUser {
    return this.usersArr.find(user => user.userId === id)!
  }

  createUser(userObj : IUser){
    this.usersArr.push(userObj)
  }

  updateUser(updatedUser : IUser){
    let getIndex = this.usersArr.findIndex(user => user.userId === updatedUser.userId);
    this.usersArr[getIndex] = updatedUser
  }

}
