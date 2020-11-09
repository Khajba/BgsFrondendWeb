import { Component, OnInit } from '@angular/core';
import { ProductListItem } from 'src/app/models/product.models';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: ProductListItem[] = [];

  constructor(private readonly productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts() {
    this.productService.getProducts().subscribe(
      response => {
        this.products = response
      });
  }

}
