import { Component, ViewChild } from '@angular/core';
import { ProductsComponent } from './products/products.component';
import { ProductServiceService } from './services/product-service.service';
import { IProduct } from './Shared Classes and types/IProduct';

@Component({
  selector: 'myfirstapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myFirstApp';
  IsShow:boolean=false;
  @ViewChild (ProductsComponent) product:ProductsComponent = new ProductsComponent(new ProductServiceService);
  ProductList:IProduct[]=this.product.renderValues();

  show(){
    this.IsShow = !this.IsShow;
  }
}
