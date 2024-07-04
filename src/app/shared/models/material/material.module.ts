import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';



let modulesArr = [MatToolbarModule,MatIconModule,MatButtonModule,MatListModule,MatCardModule,
                   MatFormFieldModule,MatSelectModule]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...modulesArr
  ],
  exports : [
    ...modulesArr
  ]
})
export class MaterialModule { }
