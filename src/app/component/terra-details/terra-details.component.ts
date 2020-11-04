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

  targetLightPower = 100;
  targetHumidity = 80;
  sunrise = 0;
  sunset = 0;
  sunSpeed = 0;

  terrarium: Terrarium;
  isLoading: boolean;

  constructor(private router: Router, private terrariumService: TerrariumService) {
    this.setIconSize();
  }

  ngOnInit(): void {
    this.isLoading = true;
    let terrariumId = Number(this.router.url.replace('/terrariums/',''));
    this.terrariumService.getTerrariumById(terrariumId).subscribe(
      result => {
      this.terrarium = result;
      this.isLoading = false;
      console.log(result);
      return;
    },
      error => {
        if(error instanceof HttpErrorResponse && (error.status === 401 || error.status === 404)){
          this.router.navigate(['/terrariums']);
          return;
        }
      })
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
    return `clip:rect(${(this.iconHeight / 100) * (100 - this.targetLightPower)}${this.iconUnit},
    ${this.bulbWidth}${this.iconUnit},
    ${this.iconHeight}${this.iconUnit},0);`;
  }

  fillTargetHumidity() {
    return `clip:rect(${(this.iconHeight / 100) * (100 - this.targetHumidity)}${this.iconUnit},
    ${this.tearWidth}${this.iconUnit},
    ${this.iconHeight}${this.iconUnit},0);`;
  }

  fillSunrise() {
    return `clip:rect(${(this.iconHeight / 100) * (100 - this.sunrise)}${this.iconUnit},
    ${this.sunWidth}${this.iconUnit},
    ${this.iconHeight}${this.iconUnit},0);`;
  }

  fillSunset() {
    return `clip:rect(${(this.iconHeight / 100) * (100 - this.sunset)}${this.iconUnit},
    ${this.sunWidth}${this.iconUnit},
    ${this.iconHeight}${this.iconUnit},0);`;
  }

  fillSunSpeed() {
    return `clip:rect(${(this.iconHeight / 100) * (100 - this.sunSpeed)}${this.iconUnit},
    ${this.sunWidth}${this.iconUnit},
    ${this.iconHeight}${this.iconUnit},0);`;
  }
}
