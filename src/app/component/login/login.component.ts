import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {AuthService} from '../../services/AuthService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  errorMsg: string = '';
  username: string = '';
  password: string = '';
  usernameLabel: string = 'Enter your login';
  passwordLabel: string = 'Enter your password';
  api: string = 'https://terrasi-api.herokuapp.com/login';

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  submitForm(){
    if(this.validateForm()){
      this.login();
    }
  }

  validateForm(): boolean{
    let flag = true;
    if(this.username == ''){
      this.usernameLabel = 'Username cannot be empty'
      flag = false;
    }else {
      this.usernameLabel = 'Enter your login'
    }
    if(this.password == ''){
      this.passwordLabel = 'Password cannot be empty'
      flag = false;
    }else {
      this.passwordLabel = 'Enter your password'
    }
    return flag;
  }

  login(){
    this.authService.removeLocalStorageTokens();
    this.http.post<any>(this.api, {username:this.username, password:this.password}).subscribe({
      next: data => {
          this.authService.addLocalStorageTokens(data.accessToken, data.refreshToken);
          this.router.navigate(['']);
        },
      error: error => {
        this.errorMsg = 'Bad username or password';
      }
      });
  }

}
