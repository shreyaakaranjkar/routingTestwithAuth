import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Iproduct } from '../../const/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  productsArray!: Array<Iproduct>;
  selId!: string;
  productId!: boolean;

  constructor(private produServ: ProductsService, private route: Router) {}

  ngOnInit() {
    this.productsArray = this.produServ.fetchAllProducts();

    // const routerUrl = this.route.url;
    // console.log(routerUrl);

    // this.productId = routerUrl == '/products' ? true : false;
    // console.log(routerUrl,this.productId);
    
  }
}
