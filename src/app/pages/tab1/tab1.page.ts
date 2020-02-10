import { Component, OnInit } from '@angular/core';
import { ApiNewsService } from '../../services/api-news.service';
import { Article } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  news: Article[] = [];

  constructor(private newsService: ApiNewsService) {}

  ngOnInit() {
    this.newsService.getTopHeadlines().subscribe(data => {
      console.log(data);
      this.news.push(...data.articles);
    });
  }

}
