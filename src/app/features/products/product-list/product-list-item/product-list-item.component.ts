import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/features/cart/cart.service';
import { UserService } from 'src/app/features/user/user.service';
import { CartItem, ProductListItem } from 'src/app/models/product.models';
import { BgsSharedService } from 'src/app/shared/bgs-shared.service';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent {
  @Input()
  product: ProductListItem = {};
  cartItem: CartItem = {};

  showAddWishlistIcon: boolean = true;
  showRemovewishlistIcon: boolean = false;

  showNumber: boolean;

  constructor(
    private readonly bgsSharedSerice: BgsSharedService,
    private readonly cartService: CartService,
    private readonly productService: ProductService,
    private readonly userService: UserService) { }

  get priceInteger(): number {
    return Math.trunc(this.product.price);
  }
  get priceDecimal(): number {
    return this.product.price * 100 % 100;
  }

  addCartClick(event: any) {
    event.stopPropagation();
    this.bgsSharedSerice.showNumber.next(this.showNumber);
    this.showNumber = true;
    this.addToCart(this.product.id);
  }

  addWishlistClick(event: MouseEvent) {
    event.stopPropagation();
    this.showAddWishlistIcon = false;
    this.showRemovewishlistIcon = true;
    this.addToWishlist();
  }

  removeWishlistClick(event: MouseEvent) {
    event.stopPropagation();
    this.showAddWishlistIcon = true;
    this.showRemovewishlistIcon = false;
    this.removeFromWishlist();
  }

  private removeFromWishlist() {
    this.userService.removeFromWishlist(this.product.id).subscribe(
      response => {

      }
    )
  }

  private addToWishlist() {
    this.userService.addToWishlist(this.product.id).subscribe(
      response => {

      }
    )
  }

  private addToCart(productId: number) {
    this.cartService.addToCart(productId).subscribe(
      response => {

      }
    )
  }
}