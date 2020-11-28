import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TerrariumService} from '../../services/TerrariumService';
import {HttpErrorResponse} from '@angular/common/http';
import {Terrarium} from '../../models/Terrarium';


@Component({
  selector: 'app-terra-details',
  templateUrl: './terra-details.component.html',
  styleUrls: ['./terra-details.component.css']
})
export class TerraDetailsComponent implements OnInit {

  iconHeight: number;
  iconUnit: string;
  bulbWidth: number;
  tearWidth: number;
  sunWidth: number;


  name: string;
  sunrise: number;
  sunset: number;
  sunSpeed = 0;

  terrarium: Terrarium;
  isLoading: boolean;

  constructor(private router: Router, public terrariumService: TerrariumService) {
    this.setIconSize();
  }

  ngOnInit(): void {
    this.isLoading = true;
    let terrariumId = Number(this.router.url.replace('/terrariums/',''));
    this.terrariumService.getTerrariumById(terrariumId).subscribe(
      result => {
      this.terrarium = result;
      this.sunrise = this.terrariumService.convertTimeToNumber(this.terrarium.terrariumSettings.sunriseTime);
      this.sunset = this.terrariumService.convertTimeToNumber(this.terrarium.terrariumSettings.sunsetTime);
      this.isLoading = false;
      return;
    },
      error => {
        if(error instanceof HttpErrorResponse && (error.status === 401 || error.status === 404 || error.status === 403)){
          this.router.navigate(['/terrariums']);
          return;
        }
      })
  }

  sendSettings() {
    if(this.name !== this.terrarium.name && this.name != null){
      this.terrarium.name = this.name;
      this.terrariumService.updateName(this.terrarium.id, this.name).subscribe();
    }
    this.terrariumService.sendSettings(this.terrarium.id, this.terrarium.terrariumSettings).subscribe();
  }

  timeToDecimal(id: string): void{
    if(id === 'sunrise-input'){
      let time = (<HTMLInputElement>document.getElementById(id)).value;
      this.sunrise = this.terrariumService.convertTimeToNumber(time);
      this.terrarium.terrariumSettings.sunriseTime = time;
    }
    else if(id === 'sunset-input'){
      let time = (<HTMLInputElement>document.getElementById(id)).value;
      this.sunset = this.terrariumService.convertTimeToNumber(time);
    }
  }

  decimalToTime(id: string): string{
    if(id === 'sunrise-input'){
      let hours = Math.floor(this.sunrise);
      let minutes = Math.floor((this.sunrise - hours) * 60);
      return (hours < 10 ? '0' + hours : hours) + ':' + (minutes===0 ? '00' :  minutes);
    }
    else if(id === 'sunset-input'){
      let hours = Math.floor(this.sunset);
      let minutes = Math.floor((this.sunset - hours) * 60);
      return (hours < 10 ? '0' + hours : hours) + ':' + (minutes===0 ? '00' :  minutes);
    }
  }

  sunriseSliderChange(value: number){
    let hours = Math.floor(value);
    let minutes = Math.floor((value - hours) * 60);
    this.sunrise = value;
    this.terrarium.terrariumSettings.sunriseTime = (hours < 10 ? '0' + hours : hours) + ':' + (minutes === 0 ? '00' : minutes);
  }

  sunsetSliderChange(value: number) {
    let hours = Math.floor(value);
    let minutes = Math.floor((value - hours) * 60);
    this.sunset = value;
    this.terrarium.terrariumSettings.sunsetTime = (hours < 10 ? '0' + hours : hours) + ':' + (minutes === 0 ? '00' : minutes);
  }

  timeLabel(value: number | null) {
    if (!value) {
      return 0;
    }
    let hhPart;
    let decimalPart = +value.toString().replace(/^[^\.]+/,'0');
    let mm = decimalPart * 60;
    let mmPart = mm.toString().length == 1 ? mm.toString() + "0" : mm.toString();
    if (value >= 0) {
      let valueStr = value.toFixed(2);
      let strArr = valueStr.split(".");
      if(strArr[0].length == 1) {
        strArr[0] = "0" + strArr[0];
      }
      hhPart = strArr[0];
    }
    return hhPart + ":" + mmPart;
  }

  @HostListener('window:resize', ['$event'])
  setIconSize() {
    if (window.innerWidth >= 2300) {
      this.iconHeight = 64.4;
      this.bulbWidth = 48.3;
      this.tearWidth = 48.3;
      this.sunWidth = 69;
      this.iconUnit = 'px';
    } else if (window.innerWidth < 2300 && window.innerWidth >= 960) {
      this.iconHeight = 2.8;
      this.bulbWidth = 2.1;
      this.tearWidth = 2.1;
      this.sunWidth = 3;
      this.iconUnit = 'vw';
    } else if (window.innerWidth <= 768) {
      this.iconHeight = 53.5;
      this.bulbWidth = 33.5;
      this.tearWidth = 38.2;
      this.sunWidth = 56;
      this.iconUnit = 'px';
    }
  }

  fillTargetLightPower() {
    return `clip:rect(${(this.iconHeight / 100) * (100 - this.terrarium.terrariumSettings.lightPower)}${this.iconUnit},
    ${this.bulbWidth}${this.iconUnit},
    ${this.iconHeight}${this.iconUnit},0);`;
  }

  fillTargetHumidity() {
    return `clip:rect(${(this.iconHeight / 100) * (100 - this.terrarium.terrariumSettings.humidityLevel)}${this.iconUnit},
    ${this.tearWidth}${this.iconUnit},
    ${this.iconHeight}${this.iconUnit},0);`;
  }

  fillSunrise() {
    return `clip:rect(${(this.iconHeight / 24) * (24 - this.sunrise)}${this.iconUnit},
    ${this.sunWidth}${this.iconUnit},
    ${this.iconHeight}${this.iconUnit},0);`;
  }

  fillSunset() {
    return `clip:rect(${(this.iconHeight / 24) * (24 - this.sunset)}${this.iconUnit},
    ${this.sunWidth}${this.iconUnit},
    ${this.iconHeight}${this.iconUnit},0);`;
  }

  fillSunSpeed() {
    return `clip:rect(${(this.iconHeight / 100) * (100 - this.terrarium.terrariumSettings.sunSpeed)}${this.iconUnit},
    ${this.sunWidth}${this.iconUnit},
    ${this.iconHeight}${this.iconUnit},0);`;
  }

  convertTemperature() {
    if (this.terrarium.sensorsReadsList[this.terrarium.sensorsReadsList.length - 1].temperature <= 10) {
      return 'height: ' + 0 + '%;';
    } else if (this.terrarium.sensorsReadsList[this.terrarium.sensorsReadsList.length - 1].temperature > 10) {
      let temp = this.terrarium.sensorsReadsList[this.terrarium.sensorsReadsList.length - 1].temperature;
      return 'height: ' + (((temp - 10) * 2) - 1) + '%;';
    }
  }

  convertHumidity() {
    return 'height: ' + (this.terrarium.sensorsReadsList[this.terrarium.sensorsReadsList.length - 1].humidity - 1) + '%;';
  }

  convertBrightness() {
    return 'height: ' + (this.terrarium.sensorsReadsList[this.terrarium.sensorsReadsList.length - 1].brightness - 1) + '%;';
  }

  convertUVA() {
    return 'height: ' + ((this.terrarium.sensorsReadsList[this.terrarium.sensorsReadsList.length - 1].uvaLevel / 4) - 1) + '%;';
  }

  convertUVB() {
    return 'height: ' + ((this.terrarium.sensorsReadsList[this.terrarium.sensorsReadsList.length - 1].uvbLevel / 4) - 1) + '%;';
  }

  convertWaterLevel() {
    return 'height: ' + (this.terrarium.sensorsReadsList[this.terrarium.sensorsReadsList.length - 1].waterLevel - 1) + '%;';
  }


}
