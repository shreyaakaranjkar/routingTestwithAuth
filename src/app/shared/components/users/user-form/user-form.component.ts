import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Iproduct } from 'src/app/shared/const/product';
import { IUser } from 'src/app/shared/const/user';
import { ProductsService } from 'src/app/shared/services/products.service';
import { UsersService } from 'src/app/shared/services/users.service';
import { UuidService } from 'src/app/shared/services/uuid.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  userForm! : FormGroup;
  isInEditMode : boolean = false;
  userId! : string;
  userObj! : IUser;

  constructor(private route : ActivatedRoute, private userServ : UsersService,
    private uuid : UuidService, private router : Router
  ) { }

  ngOnInit() {

    this.createUserForm()

    this.userEdit()

    // this.route.queryParams
    // .subscribe((params : Params) => {
    //   console.log(params['canReturnProd']);

    //   let canEditState = +params['canReturnProd']

    //   if(!canEditState && this.isInEditMode){
    //     this.productForm.disable()
    //   }
    //   else{
    //     this.productForm.enable()
    //   }
    // })

    this.route.queryParams
    .subscribe((params : Params) => {
      console.log(params['editUser']);

      let canEdit = params['editUser']
      if(canEdit=='User'){
        this.userForm.disable()
      }
      else{
        this.userForm.enable()
      }
    })
  }

  //getProductEdit

  userEdit(){
    this.route.params
    .subscribe((params : Params) => {
      console.log(params)

      this.userId = params['userId'];
      if(this.userId){
        this.isInEditMode = true;

        this.userObj = this.userServ.getSingleUser(this.userId);
        this.userForm.patchValue(this.userObj)
      }
    })
  }


  //createProductForm

  createUserForm(){
    this.userForm = new FormGroup({
      userName : new FormControl('',[Validators.required]),
      userRole : new FormControl('null',[Validators.required]),
      userImage : new FormControl('',Validators.required)
    })
  }
  
//onProductSubmit
onUserSubmit(){
  if(this.userForm.valid){

    // console.log(this.productForm.value)

    this.route.queryParams.subscribe(res => {
      console.log(res['editUser'])
    })
    let userObj = {...this.userForm.value,
      userId : this.uuid.generateUUID()
    }

    this.userServ.createUser(userObj);
    this.router.navigate(['users'])
  }
}

onUserUpdate(){
  if(this.isInEditMode){
    let updatedUserObj : IUser = 
    {...this.userForm.value,
      userId : this.userId
    }
    this.userServ.updateUser(updatedUserObj);
    this.router.navigate(['users'])
  }
}

canDeactive(){
  if(this.userForm.dirty){
    return confirm('Leaving Page will not save changes!')
  }
  return true
}

}
