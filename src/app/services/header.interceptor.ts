import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UtlitiesService } from './utlities.service';


@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  [x: string]: any;
  // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   // Add custom headers
  //   const modifiedReq = req.clone({
  //     setHeaders: {
  //       'Content-Type': 'application/json',
  //       Authorization: `Bearer YOUR_ACCESS_TOKEN`, // Replace with your token logic
  //     },
  //   });
  constructor(private utilitiesService: UtlitiesService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.utilitiesService.getToken();

    // Add custom headers
    const modifiedReq = req.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        ...(token && { 'Authorization': `Bearer ${token}` })
      },
    });

    return next.handle(modifiedReq);
  }
}
