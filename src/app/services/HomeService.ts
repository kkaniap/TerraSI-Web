import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {NewsResponse} from '../models/News';
import {environment} from '../../environments/environment';

@Injectable()
export class HomeService {

  constructor(private http: HttpClient) {}

  getAllNews(): Observable<NewsResponse> {
    return this.http.get<NewsResponse>(environment.hostURL + '/news');
  }
}


