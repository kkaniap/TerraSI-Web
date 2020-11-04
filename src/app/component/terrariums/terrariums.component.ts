import {Component, OnInit} from '@angular/core';
import {TerrariumService} from '../../services/TerrariumService';
import {TerrariumResponse} from '../../models/Terrarium';

@Component({
  selector: 'app-terrariums',
  templateUrl: './terrariums.component.html',
  styleUrls: ['./terrariums.component.css']
})
export class TerrariumsComponent implements OnInit {

  terrariums: TerrariumResponse;
  isLoading: boolean;

  constructor(private terrariumService: TerrariumService) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.terrariumService.getAllTerrariumsForUser().subscribe( terrariums => {
        this.terrariums = terrariums;
        this.isLoading = false;
      });
  }
}
