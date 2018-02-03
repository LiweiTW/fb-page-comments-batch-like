import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
import { GraphService } from '../graph.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[];
  token: string;


  constructor(
    public postService: PostService,
    private graphService: GraphService
  ) {  }

  ngOnInit() {
    
  }


  openLink(link): void {
    window.open(link);
  }
  
}
