import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductService } from './product.service';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { BgsSharedModule } from 'src/app/shared/bgs-shared.module';
import { Categoryservice } from './category-service';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductFilterComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    BgsSharedModule
  ],
  providers: [
    ProductService,
    Categoryservice
  ]
})
export class ProductsModule { }
