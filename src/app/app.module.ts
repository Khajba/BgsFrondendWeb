import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpRequestInterceptor } from './core/http/http-request.intercaptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthorizationModule } from './core/authorization/authorization.module';
import { BgsSharedModule } from './shared/bgs-shared.module';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MessageService } from 'primeng/api';
import { NavigationComponent } from './navigation/navigation.component';
import { ProductService } from './features/products/product.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthorizationModule,
    BgsSharedModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true
    },
    MessageService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
