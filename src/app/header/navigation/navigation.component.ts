import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { AuthorizationService } from 'src/app/core/authorization/authorization-service';
import { ProductService } from 'src/app/features/products/product.service';
import { ProductDetails } from 'src/app/models/product.models';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html', 
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  get firstname() {
    return this.authorizationService.authUserData.firstname;
  }

  categories: SelectItem[] = [];

  product: ProductDetails = {};

  constructor(
    private readonly productService: ProductService,
    private readonly authorizationService: AuthorizationService) { }

  ngOnInit(): void {
    this.getProdcutCategories()
  }

  private getProdcutCategories() {
    this.productService.getProductCategories().subscribe(
      response => {
        this.categories = response.map(c => {
          return <SelectItem>{
            value: c.id,
            label: c.name
          }
        })
      }
    )
  }

}
