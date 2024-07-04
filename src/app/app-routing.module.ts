import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { UsersComponent } from './shared/components/users/users.component';
import { SingleProductComponent } from './shared/components/products/single-product/single-product.component';
import { ProductFormComponent } from './shared/components/products/product-form/product-form.component';
import { SingleUserComponent } from './shared/components/users/single-user/single-user.component';
import { UserFormComponent } from './shared/components/users/user-form/user-form.component';
import { PagenotfoundComponent } from './shared/components/pagenotfound/pagenotfound.component';
import { AuthComponent } from './shared/components/auth/auth.component';
import { AuthGuardGuard } from './shared/services/auth-guard.guard';
import { ProductResolver } from './shared/services/product-resolve.service';
import { UserResolver } from './shared/services/user-resolver.service';
import { CompDeactivateGuard } from './shared/services/comp-deactivate.guard';

const routes: Routes = [
  {
    path : '',
    component : AuthComponent,
    title : 'LogIn'
  },
  {
    path : 'home',
    component : HomeComponent,
    data:{
      UserRole : ['Buyer','Admin','SuperAdmin']
    }
  },
  {
    path : 'products',
    component : ProductsComponent,
    canActivate:[AuthGuardGuard],
    data : {
      UserRole : ['Buyer','SuperAdmin']
    },
    children : [
      {
        path : 'addProduct',
        component : ProductFormComponent
      },
      {
        path : ':productsId',
        component : SingleProductComponent
      },
      {
        path : ':productsId/edit',
        component : ProductFormComponent,
        resolve : {
          productInfo : ProductResolver
        },
        canDeactivate : [CompDeactivateGuard]
      }
    ]
  },
  {
    path : 'users',
    component : UsersComponent,
    data : {
      UserRole : ['Admin','SuperAdmin']
    },
    children : [
      {
        path : 'addUser',
        component : UserFormComponent
      },
      {
        path : ':userId',
        component : SingleUserComponent
      },
      {
        path : ':userId/edit',
        component : UserFormComponent,
        resolve : {
          userInfo : UserResolver
        }
      }
    ]
  },
  {
    path : '**',
    component : PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
