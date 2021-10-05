import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductBoxComponent } from './product-box/product-box.component';
import { ProductsService } from './products.service';
import { HttpErrorHandlerService } from '../http-error-handler.service';
import { CoreModule } from '../core/core.module';
import { ProductTitleComponent } from './product-title/product-title.component';



@NgModule({
  declarations: [
    ProductsListComponent,
    ProductBoxComponent,
    ProductTitleComponent
  ],
  imports: [
    CommonModule,
    CoreModule
  ],
  providers: [ProductsService, HttpErrorHandlerService]
})
export class ProductsModule { }
