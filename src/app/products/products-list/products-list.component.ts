import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/definitions/products.definitions';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productsService.getHeroes().subscribe(products => this.products = products);
  }
}
