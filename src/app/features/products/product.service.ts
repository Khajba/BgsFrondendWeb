import { Injectable } from "@angular/core";
import { HttpService } from 'src/app/core/http/http.service';
import { Artist, Designer, Mechanic } from 'src/app/models/categories.model';
import { ProductCategory } from 'src/app/models/product.models';

const apiBaseUrl = "http://localhost:56902/api/product"

@Injectable()
export class ProductService {

    constructor(private readonly httpService: HttpService) { }

    getProductCategories() {
        return this.httpService.get<ProductCategory[]>(`${apiBaseUrl}/getProductCategories`)
    }

   
}