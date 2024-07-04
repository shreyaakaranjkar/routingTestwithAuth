import { Injectable } from '@angular/core';
import { Iproduct } from '../const/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }


  productsArr : Array<Iproduct>= [
    {
      productName : 'Samsung',
      productImage : 'https://tse1.mm.bing.net/th?id=OIP.GvSBGxTVxjsjPvkFansAggHaG4&pid=Api&P=0&h=180',
      productId : '101',
      productStatus : 'In-Progress',
      canReturn : 1
    },
    {
      productName : 'Vivo',
      productImage : 'https://i5.walmartimages.com/asr/31d23744-3a9f-4bc6-88cd-bda390bab17e.9b9212a7dd5d6be8175ff3645610dce4.jpeg',
      productId : '102',
      productStatus : 'Dispatched',
      canReturn : 0
    },
    {
      productName : 'Asus',
      productImage : 'https://tse1.mm.bing.net/th?id=OIP.GvSBGxTVxjsjPvkFansAggHaG4&pid=Api&P=0&h=180',
      productId : '103',
      productStatus : 'Delivered',
      canReturn : 0
    },
    {
      productName : 'Iphone',
      productImage : 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6341/6341344cv11d.jpg',
      productId : '104',
      productStatus : 'In-Progress',
      canReturn : 1
    }
  ]

  fetchAllProducts(){
    return this.productsArr
  }

  //getSingleProduct
  getSingleProduct(id:string):Iproduct {
    return this.productsArr.find(product => product.productId === id)!
  }

  createProduct(productObj : Iproduct){
    this.productsArr.push(productObj)
  }

  updateProduct(updatedProduct : Iproduct){
    let getIndex = this.productsArr.findIndex(product => product.productId === updatedProduct.productId);
    this.productsArr[getIndex] = updatedProduct
  }
}
