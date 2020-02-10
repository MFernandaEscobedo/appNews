import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resp } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiNewsService {

  constructor(private http: HttpClient) { }

  getTopHeadlines() {
    return this.http.get<Resp>(`https://newsapi.org/v2/top-headlines?country=mx&category=technology&apiKey=2e43382db4144a0785092890167bc800`);
  }
}
