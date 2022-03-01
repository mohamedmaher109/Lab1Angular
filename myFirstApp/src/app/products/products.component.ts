import { Component, OnInit } from '@angular/core';
import { IProduct } from '../Shared Classes and types/IProduct';
import { ICategory } from '../Shared Classes and types/ICategory';
import { DiscountOffers } from '../Shared Classes and types/DiscountOffers ';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  Discount     :DiscountOffers;
  StoreName    :string;
  StoreLogo    :string;
  ProductList  :IProduct[];
  CategoryList :ICategory[];
  ClientName   :string;
  IsPurshased  :boolean;
  //service      : ProductServiceService;



  constructor(private productService:ProductServiceService) {
    this.Discount    = DiscountOffers.Discount10;
    this.StoreName   = "Men Clothes";
    this.StoreLogo   = "../../assets/logo.jpg";
    this.ProductList = productService.GetAllProducts();

    this.CategoryList = [{Id:1,Name:"Jackets"},{Id:2,Name:"Pantalons"},{Id:3,Name:"T-shirts"}];
    this.ClientName = "Mohamed Maher";
    this.IsPurshased = false;
    //this.service  = productService;
   }

   toggleShow() {

    this.IsPurshased = ! this.IsPurshased;
    
    }

    find(id:number):any{
      return this.productService.GetProductById(id);

    }

    renderValues():IProduct[]{
      return this.ProductList;
    }
  

  ngOnInit(): void {
  }

}
