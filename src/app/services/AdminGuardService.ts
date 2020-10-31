import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthService} from './AuthService';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable()
export class AdminGuardService implements CanActivate{

  private jwtHelper = new JwtHelperService();

  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot): boolean{
    const expectedRole = route.data.expectedRole;
    const token = localStorage.getItem('accessToken');
    const tokenPayload = this.jwtHelper.decodeToken(token);

    if(this.authService.isAuthenticated() && tokenPayload.roles.includes('ROLE_ADMIN')){
      return true;
    }
    this.router.navigate(['']);
    return false;
  }
}
