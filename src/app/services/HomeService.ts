import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {NewsResponse} from '../models/NewsModel';

@Injectable()
export class HomeService {

  constructor(private http: HttpClient) {}

  getAllNews(): Observable<NewsResponse> {
    return this.http.get<NewsResponse>('http://localhost:8080/news');
  }
}


