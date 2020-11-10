import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { ProductFilter, ProductListItem } from 'src/app/models/product.models';
import { BgsSharedService } from 'src/app/shared/bgs-shared.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  pageSizeOptions: SelectItem[] = [
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' }
  ]

  options: SelectItem[] = [
    {
      value: 1,
      label: ' Price : Low To High'
    },
    {
      value: 2,
      label: 'Price : High To Low'
    },
    {
      value: 3,
      label: 'Newest Arrivals'
    }
  ];
  filter: ProductFilter = {pageSize:2, sortOrder: 3};

  showList: boolean = false;

  products: ProductListItem[] = [];

  constructor(
    private readonly productService: ProductService,
    private readonly sharedService: BgsSharedService) { }

  ngOnInit(): void {
    this.getProducts();
    this.subscribeSubjet();

  }

  changeSortOrder(){
    this.getProducts();
  }


  changePageSize() {
    this.getProducts();
  }

  private subscribeSubjet() {
    this.sharedService.productFilter$.subscribe(
      filter => {
        this.filter = { ...this.filter, ...filter }
        this.getProducts();
      }
    )
  }

  private getProducts() {
    this.productService.getProducts(this.filter).subscribe(
      response => {
        this.products = response
      });
  }

}
