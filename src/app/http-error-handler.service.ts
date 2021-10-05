import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export type HandleError =
  <T> (operation?: string, result?: T) => (error: HttpErrorResponse) => Observable<T>;

@Injectable()
export class HttpErrorHandlerService {
  constructor() { }

  createErrorHandler(serviceName = '') {
    return <T>(operation = 'operation', result = {} as T) => this.handleError(serviceName, operation, result);
  }

  handleError<T>(serviceName = '', operation = 'operation', result = {} as T) {
    return (error: HttpErrorResponse): Observable<T> => {
      console.error(error);

      console.log(`[HTTP Handler] ${serviceName}: ${operation} failed`);
      
      return of(result);
    };
  }
}
