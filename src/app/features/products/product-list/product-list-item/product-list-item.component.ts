import { Component, Input, OnInit } from '@angular/core';
import { ProductDetails, ProductListItem } from 'src/app/models/product.models';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent {
  @Input()
  product: ProductListItem = {};

  get priceInteger(): number {
    return Math.trunc(this.product.price);
  }

  get priceDecimal(): number {
    return this.product.price * 100 % 100;
  }
}
