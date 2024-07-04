import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iproduct } from 'src/app/shared/const/product';
import { ProductsService } from 'src/app/shared/services/products.service';
import { UuidService } from 'src/app/shared/services/uuid.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  productForm! : FormGroup;
  isInEditMode : boolean = false;
  productId! : string;
  productObj! : Iproduct;

  constructor(private route : ActivatedRoute, private prodServ : ProductsService,
    private uuid : UuidService, private router : Router
  ) { 
    // this.route.data
    // .subscribe(res => {
    //   this.productId = res['productInfo'];
    //   console.log(this.productId)
    // })
  }

  ngOnInit() {

    this.createProductForm()

    this.getProductEdit()

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
      console.log(params['canReturnProd']);

      let canEdit = params['canReturnProd']
      if(canEdit==0){
        this.productForm.disable()
      }
      else{
        this.productForm.enable()
      }
    })
  }

  //getProductEdit

  getProductEdit(){
    this.route.params
    .subscribe((params : Params) => {
      console.log(params)

      this.productId = params['productsId'];
      if(this.productId){
        this.isInEditMode = true;

        this.productObj = this.prodServ.getSingleProduct(this.productId);
        this.productForm.patchValue(this.productObj)
      }
    })

    console.log(this.productId)
  //   if(this.productId){
  //         this.isInEditMode = true;
  
  //         this.productObj = this.prodServ.getSingleProduct(this.productId);
  //         this.productForm.patchValue(this.productObj)
  // }
  }

  //createProductForm

  createProductForm(){
    this.productForm = new FormGroup({
      productName : new FormControl('',[Validators.required]),
      productStatus : new FormControl('null',[Validators.required]),
      productImage : new FormControl('',Validators.required)
    })
  }
  
//onProductSubmit
onProductSubmit(){
  if(this.productForm.valid){
    let canValue = Math.random() >=.5? 1:0;
    console.log(canValue)
    // console.log(this.productForm.value)

    let productObj = {...this.productForm.value,
      productId : this.uuid.generateUUID(),
      canReturn : canValue
    }

    this.prodServ.createProduct(productObj);
    this.router.navigate(['products'])
  }
}

onProductUpdate(){
  if(this.isInEditMode){
    let productUpdateObj : Iproduct = 
    {...this.productForm.value,
      productId : this.productId
    }
    this.prodServ.updateProduct(productUpdateObj);
    this.router.navigate(['products'])
  }
}

canDeactive(){
  if(this.productForm.dirty){
    return confirm('Leaving Page will not save changes!')
  }
  return true
}
}
