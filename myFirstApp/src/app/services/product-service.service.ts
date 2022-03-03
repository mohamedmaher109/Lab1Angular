import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IProduct } from '../Shared Classes and types/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  
  url:string = "../assets/products.json"
  constructor(private http:HttpClient) { 
   
  }

  GetAllProducts():Observable<IProduct[]>{

    return this.http.get<IProduct[]>(this.url).pipe(catchError((err)=>{
      return throwError(err.Message||"Server error");
    }));
  }

  /*GetProductById(prdId:number):any{
    if(isNaN(prdId)){
      return null;
    }
    else{
      return this.ProductList.find(product=>product.Id==prdId);

    }
    
  }*/
}
