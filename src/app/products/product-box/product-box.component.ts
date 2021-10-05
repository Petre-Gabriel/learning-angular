import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/definitions/products.definitions';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.scss']
})
export class ProductBoxComponent implements OnInit {

  @Input() productData: Product = {} as Product;
  productImageForCSS: string = '';

  constructor() { }

  ngOnInit(): void {
    this.productImageForCSS = `url(${this.productData.image})`;
  }

}
