import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { IUser } from "../const/user";
import { UsersService } from "./users.service";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn : 'root'
})

export class UserResolver implements Resolve<IUser>{
    constructor(private userServ : UsersService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
    Observable<IUser> | Promise<IUser> | IUser {
       let getUserId = route.params['userId'];
       return this.userServ.getSingleUser(getUserId)
    }
}