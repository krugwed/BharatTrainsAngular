import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Add custom headers
    const modifiedReq = req.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        //Authorization: `Bearer YOUR_ACCESS_TOKEN`, // Replace with your token logic
      },
    });

    return next.handle(modifiedReq);
  }
}
