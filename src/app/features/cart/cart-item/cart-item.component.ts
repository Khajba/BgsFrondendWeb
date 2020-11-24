import { Component, Input, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { CartItem } from 'src/app/models/product.models';
import { BgsSharedService } from 'src/app/shared/bgs-shared.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input()
  cartItem: CartItem = {};

  quantities: SelectItem[] = []

  constructor(private readonly bgsSharedService: BgsSharedService) { }

  ngOnInit(): void {
    this.initQuantitiesDropdown();
  }

  get priceInteger(): number {
    if (this.cartItem.price == undefined) {
      return 0;
    }
    return Math.trunc(this.cartItem.price)
  }

  get priceDecimal(): number {
    if (this.cartItem.price == undefined) {
      return 0;
    }
    return this.cartItem.price * 100 % 100
  }

  get totalPriceInteger(): number {
    var totalPrice = this.cartItem.quantity * this.cartItem.price;
    if (totalPrice == undefined) {
      return 0;
    }
    return Math.trunc(totalPrice)
  }

  get totalPriceDecimal(): number {
    var totalPrice = this.cartItem.quantity * this.cartItem.price;
    if (totalPrice == undefined) {
      return 0;
    }
    return totalPrice * 100 % 100
  }

  removeClick() {

  }

  private initQuantitiesDropdown() {
    for (var i = 1; i <= 10; i++) {
      this.quantities.push({ value: i, label: i.toString() });
    }
  }
}
