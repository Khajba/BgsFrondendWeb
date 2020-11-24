import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/http/http.service';
import { CartItem } from 'src/app/models/product.models';

const apiBaseUrl = "http://localhost:56902/api/cart"

@Injectable()
export class CartService {

    constructor(private readonly httpService: HttpService) { }

    getCartItems() {
        return this.httpService.get<CartItem[]>(`${apiBaseUrl}/getCartItems`)
    }

    addToCart(productId: number) {
        return this.httpService.post<CartItem>(`${apiBaseUrl}/addToCart`, productId, true)
    }

    deleteFromCart(cartItemId: number) {
        return this.httpService.post<number>(`${apiBaseUrl}/deleteFromCart`, cartItemId, true)
    }

    updateCart(cart: CartItem) {
        const requestParams = {
            id: cart.id,
            quantity: cart.quantity
        }
        return this.httpService.post<CartItem>(`${apiBaseUrl}/updateCart`, requestParams, true)
    }
}