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
}