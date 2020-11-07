import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Terrarium, TerrariumResponse} from '../models/Terrarium';

@Injectable()
export class TerrariumService{

  private api = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getAllTerrariumsForUser(): Observable<TerrariumResponse>{
    return this.http.get<TerrariumResponse>(this.api + '/terrariums');
  }

  getTerrariumById(id: number): Observable<Terrarium>{
    return this.http.get<Terrarium>(this.api + '/terrariums/' + id);
  }

  convertTimeToNumber(date: string): number{
    let hoursMinutes = date.split(':');
    let hours = Number(hoursMinutes[0]);
    let minutes = (Number(hoursMinutes[1]) / 60);
    return hours + minutes;
  }

}
