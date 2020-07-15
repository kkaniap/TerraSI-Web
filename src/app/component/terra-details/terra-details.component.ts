import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terra-details',
  templateUrl: './terra-details.component.html',
  styleUrls: ['./terra-details.component.css']
})
export class TerraDetailsComponent implements OnInit {

  targetLightPower = 100;
  targetHumidity = 80;
  sunrise = 0;
  sunset = 0;
  sunSpeed = 0;

  constructor() { }

  ngOnInit(): void {
  }

  fillTargetLightPower() {
    return `clip:rect(${0.028 * (100 - this.targetLightPower)}vw,2.1vw ,2.8vw,0);`;
  }

  fillTargetHumidity() {
    return `clip:rect(${0.028 * (100 - this.targetHumidity)}vw,2.1vw ,2.8vw,0);`;
  }

  fillSunrise() {
    return `clip:rect(${0.028 * (100 - this.sunrise)}vw,3vw ,2.8vw,0);`;
  }

  fillSunset() {
    return `clip:rect(${0.028 * (100 - this.sunset)}vw,3vw ,2.8vw,0);`;
  }

  fillSunSpeed() {
    return `clip:rect(${0.028 * (100 - this.sunSpeed)}vw,3vw ,2.8vw,0);`;
  }
}
