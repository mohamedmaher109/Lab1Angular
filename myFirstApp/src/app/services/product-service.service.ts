import { Injectable } from '@angular/core';
import { IProduct } from '../Shared Classes and types/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private ProductList:IProduct[];
  
  constructor() { 
    this.ProductList = [{Id:1,Name:"black-jacket",Price:1000,Quantity:1,Image:"../../assets/8.jpg"}
    ,{Id:2,Name:"slim-fit pantalon",Price:500,Quantity:1,Image:"../../assets/1.jpg"}];
  }

  GetAllProducts():IProduct[]{

    return this.ProductList;
  }

  GetProductById(prdId:number):any{
    if(isNaN(prdId)){
      return null;
    }
    else{
      return this.ProductList.find(product=>product.Id==prdId);

    }
    
  }
}
