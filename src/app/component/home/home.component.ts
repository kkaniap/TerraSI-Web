import {Component, OnInit} from '@angular/core';
import {News, NewsResponse} from '../../models/News';
import {HomeService} from '../../services/HomeService';
import {HttpClient} from '@angular/common/http';

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

  constructor(private homeService: HomeService, public http:HttpClient) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.homeService.getAllNews().subscribe(news => {
      this.newsList = news;
      this.lastNews = this.newsList._embedded.newsList.pop();
      this.newsList._embedded.newsList = this.newsList._embedded.newsList.reverse();
      this.isLoading = false;
      this.http.get('https://192.168.55.109/kania',{responseType: 'text'}).subscribe(
        result => {
          console.log(result);
        },
        error => {
          console.log(error);
        }
      )
    });
  }
}
