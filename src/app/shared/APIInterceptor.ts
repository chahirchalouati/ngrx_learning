import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable()
export class APIInterceptor implements HttpInterceptor {
  baseUrl: string = environment.apiUrl;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const apiReq = req.clone({url: `${this.baseUrl + "/" + req.url}`});
    return next.handle(apiReq);
  }
}
