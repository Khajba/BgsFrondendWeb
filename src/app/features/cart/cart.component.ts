import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/product.models';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems: CartItem[] = [];

 

  constructor(private readonly cartService: CartService) { }

  ngOnInit(): void {
    this.getCartItems();
  }

  placeOrderClick(){

  }

  deleteCartItem(cartItemId: number) {
    this.cartService.deleteFromCart(cartItemId).subscribe(
      response => {
        this.getCartItems();
      }
    )
  }

  private getCartItems() {
    this.cartService.getCartItems().subscribe(
      response => {
        this.cartItems = response
      }
    )
  }
}
