import { Component, OnInit } from '@angular/core';
import { ProductDetails } from 'src/app/models/product.models';
import { BgsSharedService } from 'src/app/shared/bgs-shared.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  showNumber: boolean = false;
  product: ProductDetails = { stock: 3 };


  constructor(private readonly productService: ProductService,
    private readonly bgsSharedservice: BgsSharedService) { }

  ngOnInit(): void {
    this.getProductDetails();
    this.getProductStock();
  }

  addCommentClick() {

  }

  cartClick() {
    this.showNumber = true;
    this.bgsSharedservice.showNumber.next(this.showNumber);
  }

  private getProductStock() {
    this.productService.getProductStock().subscribe(
      response => {
        this.product = response;
      }
    )
  }



  private getProductDetails() {
    this.productService.getProductDetails().subscribe(
      response => {
        this.product = response
      }
    )
  }


}
