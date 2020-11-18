import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
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

  private getCartItems() {
    this.cartService.getCartItems().subscribe(
      response => {
        this.cartItems = response
      }
    )
  }
}
