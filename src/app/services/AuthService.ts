import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';



@Injectable()
export class AuthService{
  private refreshApi = 'http://terrasi-api.herokuapp.com/refreshToken';
  private jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient) {
  }

  removeLocalStorageTokens() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  }

  addLocalStorageTokens(accessToken: string, refreshToken: string){
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
  }

  refreshAccessToken(){
    return this.http.post(this.refreshApi, {refreshToken: localStorage.getItem('refreshToken')})
  }

  saveAccessToken(accessToken: string){
    localStorage.setItem('accessToken', accessToken);
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('refreshToken');
    return !this.jwtHelper.isTokenExpired(token);
  }

}

