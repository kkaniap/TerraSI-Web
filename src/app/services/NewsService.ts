import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {News} from '../models/News';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) {}

  getNewsById(id: number): Observable<News> {
    return this.http.get<News>(environment.hostURL + '/news/' + id);
  }
}
