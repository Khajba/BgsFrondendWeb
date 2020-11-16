import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';
import { HttpService } from 'src/app/core/http/http.service';
import { Artist, Designer, Mechanic } from 'src/app/models/categories.model';
import { ProductCategory, ProductFilter, ProductListItem } from 'src/app/models/product.models';

const apiBaseUrl = "http://localhost:56902/api/product"

@Injectable()
export class ProductService {

    constructor(private readonly httpService: HttpService) { }

    getProductCategories() {
        return this.httpService.get<ProductCategory[]>(`${apiBaseUrl}/getProductCategories`)
    }

    getProducts(filter: ProductFilter) {
        return this.httpService.get<ProductListItem[]>(`${apiBaseUrl}/getProducts`, filter)
    }

    getProductDetails() {
        return this.httpService.get(`${apiBaseUrl}/getProductDetails`)
    }

    getProductStock(){
        return this.httpService.get(`${apiBaseUrl}/getProductStock`)
    }
}