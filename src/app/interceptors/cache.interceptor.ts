import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse
}                              from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {

  private cache: Map<string, HttpResponse<unknown>> = new Map();

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.method !== 'GET') {
      return next.handle(request);
    }

    const cacheKey: string = `${request.url}-${request.params.toString()}`;

    const cachedResponse = this.cache.get(cacheKey);

    if (cachedResponse) {
      console.log('Cache hit');
      return of(cachedResponse);
    }

    console.log('Cache miss');

    return next.handle(request).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          this.cache.set(cacheKey, event.clone());
        }
      })
    );
  }
}
