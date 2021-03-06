import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Terrarium, TerrariumResponse} from '../models/Terrarium';
import {environment} from '../../environments/environment';
import {TerrariumSettings} from '../models/TerrariumSettings';

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

  sendSettings(id: number, settings: TerrariumSettings): Observable<any>{
    return this.http.put(environment.hostURL + '/terrariums/' + id + '/settings', settings, {responseType: 'text'});
  }

  updateName(id: number, name: string): Observable<any>{
    return this.http.patch(environment.hostURL + '/terrariums/' + id + '/name', name, {responseType: 'text'});
  }

  bulbOnOff(id: number, isTurnedOn: boolean): Observable<any>{
    return this.http.post(environment.hostURL + '/terrariums/' + id + '/bulbOnOf', '', {responseType: 'text'})
  }

  humidifierOnOff(id: number, isTurnedOn: boolean): Observable<any>{
    return this.http.post(environment.hostURL + '/terrariums/' + id + '/humidifierOnOff', '', {responseType: 'text'})
  }
}
