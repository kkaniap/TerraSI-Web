import {Component, OnInit} from '@angular/core';
import {News, NewsResponse} from '../../models/NewsModel';
import {HomeService} from '../../services/HomeService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  panelOpenState = false;
  newsList: NewsResponse;
  lastNews: News;
  test: string;

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.homeService.getAllNews().subscribe(news => {
      this.newsList = news;
      this.lastNews = this.newsList._embedded.newsList.pop();
      this.newsList._embedded.newsList = this.newsList._embedded.newsList.reverse();
    });
  }
}
