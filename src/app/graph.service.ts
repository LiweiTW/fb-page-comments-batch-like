import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Post } from './post';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class GraphService {

  private pageToken: string;
  private reqUrl = "https://graph.facebook.com/v2.8/me/posts?fields=id,link,message,is_published,picture,comments,created_time,admin_creator&format=json&access_token=";

  constructor(private http: HttpClient) { }

  getToken(): string {
    return this.pageToken;
  }

  setToken(pageToken) {
    this.pageToken = pageToken;
  }

  fetchPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.reqUrl + this.pageToken);
    // return of(POSTS);
  }

}
