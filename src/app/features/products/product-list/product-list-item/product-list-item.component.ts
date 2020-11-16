import { Component, Input } from '@angular/core';
import { ProductListItem } from 'src/app/models/product.models';
import { BgsSharedService } from 'src/app/shared/bgs-shared.service';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent {
  @Input()
  product: ProductListItem = {};

  showNumber: boolean;
  constructor(private readonly bgsSharedSerice: BgsSharedService) { }

  get priceInteger(): number {
    return Math.trunc(this.product.price);
  }

  addCartClick(event: any) {
    event.stopPropagation();
    this.bgsSharedSerice.showNumber.next(this.showNumber);
    this.showNumber = true;

  }

  get priceDecimal(): number {
    return this.product.price * 100 % 100;
  }
}
