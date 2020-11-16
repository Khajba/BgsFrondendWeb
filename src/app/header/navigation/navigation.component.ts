import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { AuthorizationService } from 'src/app/core/authorization/authorization-service';
import { ProductService } from 'src/app/features/products/product.service';
import { ProductDetails, ProductFilter } from 'src/app/models/product.models';
import { BgsSharedService } from 'src/app/shared/bgs-shared.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
 

  categories: SelectItem[] = [];

  product: ProductDetails = {};

  filter: ProductFilter = {};

  constructor(
    private readonly productService: ProductService,
    private readonly authorizationService: AuthorizationService,
    private readonly sharedService: BgsSharedService) { }

  ngOnInit(): void {
    this.getProdcutCategories()
  }

  searchClick() {
    this.sharedService.productFilter.next(this.filter);
  }

  changeCategory() {
    this.sharedService.productFilter.next(this.filter)
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
