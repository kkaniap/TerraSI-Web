import {Component, OnInit} from '@angular/core';
import {News, NewsResponse} from '../../models/News';
import {HomeService} from '../../services/HomeService';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  panelOpenState = false;
  newsList: NewsResponse;
  lastNews: News;
  isLoading: boolean;

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    console.log(environment.hostURL);
    this.isLoading = true;
    this.homeService.getAllNews().subscribe(news => {
      this.newsList = news;
      this.lastNews = this.newsList._embedded.newsList.pop();
      this.newsList._embedded.newsList = this.newsList._embedded.newsList.reverse();
      this.isLoading = false;
    });
  }
}
