import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {catchError, filter, switchMap, take} from 'rxjs/operators';
import {AuthService} from '../services/AuthService';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private authService: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(localStorage.getItem('accessToken')){
      req = this.addToken(req, localStorage.getItem('accessToken'));
    }
    return next.handle(req).pipe(catchError(err => {
      if(err instanceof HttpErrorResponse && err.status === 401){
        return this.handle401Error(req, next);
      } else {
        return throwError(err);
      }
    }));
  }

  private addToken(request: HttpRequest<any>, token: string){
    return request.clone({
      setHeaders: {
        'Authorization': `Bearer ${token}`
      }
    })
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler){
    if(!this.isRefreshing){
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);

      return this.authService.refreshAccessToken().pipe(
        switchMap((token: any) => {
          console.log('token refreshed');
          this.isRefreshing = false;
          this.authService.saveAccessToken(token['accessToken']);
          this.refreshTokenSubject.next(token['accessToken']);
          return next.handle(this.addToken(request, token['accessToken']));
        }), catchError(error => {
          if(error instanceof HttpErrorResponse && error.status === 401){
            this.authService.removeLocalStorageTokens();
            return
          } else {
            return throwError(error);
          }
        }));
    } else {
      return this.refreshTokenSubject.pipe(
        filter(token => token != null),
        take(1),
        switchMap(jwt => {
          return next.handle(this.addToken(request, jwt));
        }));
    }
  }
}
