import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { CartItem } from 'src/app/models/product.models';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
}) 
export class CartItemComponent implements OnInit {

  product: CartItem = {}

  quantities: SelectItem[] = []

  constructor() { }

  ngOnInit(): void {
    for (var i = 1; i <= 10; i++) {
      this.quantities.push({ value: i, label: i.toString() });
    }
  }

  get priceInteger(): number {
    if (this.product.price == undefined) {
      return 0;
    }
    return Math.trunc(this.product.price)
  }

  get priceDecimal(): number {
    if (this.product.price == undefined) {
      return 0;
    }
    return this.product.price * 100 % 100
  }

  get totalPriceInteger(): number {
    var totalPrice = this.product.quantity * this.product.price;
    return Math.trunc(totalPrice)
  }

  get totalPriceDecimal(): number {
    var totalPrice = this.product.quantity * this.product.price;
    return totalPrice * 100 % 100
  }

  removeClick(){
    this.product={};}

  

}
