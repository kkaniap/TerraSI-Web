import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Terrarium, TerrariumResponse} from '../models/Terrarium';
import {environment} from '../../environments/environment';

@Injectable()
export class TerrariumService{

  constructor(private http: HttpClient) {}

  getAllTerrariumsForUser(): Observable<TerrariumResponse>{
    return this.http.get<TerrariumResponse>(environment.hostURL + '/terrariums');
  }

  getTerrariumById(id: number): Observable<Terrarium>{
    return this.http.get<Terrarium>(environment.hostURL + '/terrariums/' + id);
  }

  convertTimeToNumber(date: string): number{
    let hoursMinutes = date.split(':');
    let hours = Number(hoursMinutes[0]);
    let minutes = (Number(hoursMinutes[1]) / 60);
    return hours + minutes;
  }

}
