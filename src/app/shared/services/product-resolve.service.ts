import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Iproduct } from "../const/product";
import { ProductsService } from "./products.service";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn : 'root'
})

export class ProductResolver implements Resolve<Iproduct>{

    constructor(private prodServ : ProductsService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
    Observable<Iproduct> | Promise<Iproduct> | Iproduct {
        let getProdId = route.params['productsId'];
        return this.prodServ.getSingleProduct(getProdId)
    }
}