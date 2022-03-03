import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { IPosts } from '../Shared Classes and types/IPosts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  postsList:IPosts[];
  errorMsg:string;
  constructor(private postService:PostService) { 
    this.postsList = [];
    this.errorMsg = ""
  }

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe(postData=>{
      this.postsList = postData;
    },
    error=>{
      this.errorMsg = error;
    }
    )

  }

}
