import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { GraphService } from '../graph.service';
import { PostService } from '../post.service';

@Component({
  selector: 'app-page-token',
  templateUrl: './page-token.component.html',
  styleUrls: ['./page-token.component.css']
})
export class PageTokenComponent implements OnInit {

  storedToken: string;
  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    @Inject('LOCALSTORAGE') private localStorage: any,
    private graphService: GraphService,
    private postService: PostService) { }

  ngOnInit() {
    this.storedToken = this.graphService.getToken();
    this.storedToken = window.localStorage.getItem("pageToken");
    if (isPlatformBrowser(this.platformId)) {
      
    }
    if (isPlatformServer(this.platformId)) {
        // localStorage will be null.
    }
    
  }

  confirmToken(pageToken: string) {
    window.localStorage.setItem("pageToken", pageToken);
    this.graphService.setToken(pageToken);
    this.postService.fetchPosts();
  }

}
