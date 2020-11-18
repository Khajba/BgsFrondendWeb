import { Component, OnInit } from '@angular/core';
import { ProductDetails } from 'src/app/models/product.models';
import { BgsSharedService } from 'src/app/shared/bgs-shared.service';
import { ProductService } from '../product.service';
import { CommentModel } from 'src/app/models/comment.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  showNumber: boolean = false;
  product: ProductDetails = { stock: 3, price: 61.95, description: 'safdjsfd' };
  comment: CommentModel = {};




  constructor(private readonly productService: ProductService,
    private readonly bgsSharedservice: BgsSharedService) { }

  ngOnInit(): void {
    this.getProductDetails();
    this.getProductStock();
  }

  addCommentClick() {
    this.addProductComment();
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

  private getProductComments() {
    this.productService.getProductComments().subscribe(
      response => {
        this.product.comments = response;
      }
    )
  }

  private addProductComment() {
    this.productService.addProductComment(this.comment.description).subscribe(
      response => {
        this.getProductComments();
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
