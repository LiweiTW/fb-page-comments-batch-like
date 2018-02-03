import { Injectable } from '@angular/core';
import { Post } from './post';
import { GraphService } from './graph.service';

@Injectable()
export class PostService {

  posts: Post[];

  constructor(private graphService: GraphService) { }  

  fetchPosts(): void {
    this.graphService.fetchPosts()
        .subscribe(res => this.posts = res.data);
  }

  getPosts(): Post[] {
    return this.posts;
  }

}
