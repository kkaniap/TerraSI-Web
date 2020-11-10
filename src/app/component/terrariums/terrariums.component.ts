import {Component, OnInit} from '@angular/core';
import {TerrariumService} from '../../services/TerrariumService';
import {TerrariumResponse} from '../../models/Terrarium';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-terrariums',
  templateUrl: './terrariums.component.html',
  styleUrls: ['./terrariums.component.css']
})
export class TerrariumsComponent implements OnInit {

  terrariums: TerrariumResponse;
  message: string;
  isLoading: boolean;

  constructor(private terrariumService: TerrariumService) {
  }

  ngOnInit(): void {
    this.isLoading = true;

    this.terrariumService.getAllTerrariumsForUser().subscribe(
      result => {
        this.terrariums = result;
        this.isLoading = false;
      },
      error => {
        if(error instanceof HttpErrorResponse && error.status === 404){
          this.isLoading = false;
          this.message = 'You don\'t have any terrariums\n';
        }
      }
      );
  }
}
