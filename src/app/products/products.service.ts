import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HandleError, HttpErrorHandlerService } from '../http-error-handler.service';
import { Product } from '../shared/definitions/products.definitions';

@Injectable()
export class ProductsService {

  apiUrl: string = 'https://fakestoreapi.com/products/category/jewelery?limit=6';
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandlerService,
  ) {
    this.handleError = httpErrorHandler.createErrorHandler('ProductsService');
  }


  // Get a list of all the products
  getHeroes(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl).pipe(
      catchError(this.handleError('getHeroes', []))
    )
  }
}
