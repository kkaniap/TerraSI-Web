import {Component, OnInit} from '@angular/core';
import {NewsService} from '../../services/NewsService';
import {Router} from '@angular/router';
import {News} from '../../models/News';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news: News;
  newsId: number;
  isLoading: boolean;

  constructor(private newsService: NewsService, private router: Router) {
  }

  ngOnInit(): void {
    this.isLoading = true
    this.newsId = Number(this.router.url.replace('/news/', ''));
    this.newsService.getNewsById(this.newsId).subscribe(news => {
      this.news = news;
      this.isLoading = false;
    })
  }
}
