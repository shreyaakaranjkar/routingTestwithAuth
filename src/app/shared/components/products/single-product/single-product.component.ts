import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Iproduct } from 'src/app/shared/const/product';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {

  productId! : string;
  productObj! : Iproduct;

  constructor(private _route : ActivatedRoute, private prodServ : ProductsService) { 
    // this._route.data
    // .subscribe(res => {
    //   this.productObj = res['productInfo']
    // })
  }

  ngOnInit() {
   this._route.params
      .subscribe((res : Params) => {
        this.productId = res['productsId'];
        console.log(this.productId);
        if(this.productId){
          this.productObj = this.prodServ.getSingleProduct(this.productId)
        }
      })
  }

}
