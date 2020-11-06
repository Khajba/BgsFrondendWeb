import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { ProductService } from '../features/products/product.service';
import { ProductCategory, ProductDetails } from '../models/product.models';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  

  categories : SelectItem[] = [];

  product : ProductDetails ={};

  constructor(private readonly productService : ProductService){}

  ngOnInit(): void {
    this.getProdcutCategories()
  }

  private getProdcutCategories(){
    this.productService.getProductCategories().subscribe(
      response => {
        this.categories=response.map(c => {
          return <SelectItem>{
            value: c.id,
            label: c.name
          }
        })
      }
    )
  }

}
