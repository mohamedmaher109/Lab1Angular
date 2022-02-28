import { Component, OnInit } from '@angular/core';
import { IProduct } from '../Shared Classes and types/IProduct';
import { ICategory } from '../Shared Classes and types/ICategory';
import { DiscountOffers } from '../Shared Classes and types/DiscountOffers ';

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



  constructor() {
    this.Discount    = DiscountOffers.Discount10;
    this.StoreName   = "Men Clothes";
    this.StoreLogo   = "../../assets/logo.jpg";
    this.ProductList = [{Id:1,Name:"black-jacket",Price:1000,Quantity:1,Image:"../../assets/8.jpg"}
                      ,{Id:2,Name:"slim-fit pantalon",Price:500,Quantity:1,Image:"../../assets/1.jpg"}];

    this.CategoryList = [{Id:1,Name:"Jackets"},{Id:2,Name:"Pantalons"},{Id:3,Name:"T-shirts"}];
    this.ClientName = "Mohamed Maher";
    this.IsPurshased = false;
   }

   toggleShow() {

    this.IsPurshased = ! this.IsPurshased;
    
    }
  

  ngOnInit(): void {
  }

}
