import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthService} from './AuthService';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable()
export class UserGuardService implements CanActivate{

  private jwtHelper = new JwtHelperService();

  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot): boolean{
    const token = localStorage.getItem('accessToken');
    const tokenPayload = this.jwtHelper.decodeToken(token);

    if(this.authService.isAuthenticated() && tokenPayload.roles.includes('ROLE_USER')){
      return true;
    }
    this.authService.removeLocalStorageTokens();
    this.router.navigate(['login']);
    return false;
  }
}
