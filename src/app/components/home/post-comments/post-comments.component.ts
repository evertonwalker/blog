import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Post } from 'src/app/interfaces/post.interface';
import { PostComment } from 'src/app/interfaces/post-comment.interface';
import { PostDataService } from 'src/app/services/posts-filter.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.css']
})
export class PostCommentsComponent implements OnInit {

  post: Post;
  comments: PostComment[];

  constructor(private route: ActivatedRoute, private postDataService: PostDataService, private postService: PostService) { }

  ngOnInit(): void {

    this.postDataService.currentPost.subscribe(currentyPost => {
      this.post = currentyPost;

      if (!this.post) {
        this.route.params.subscribe(params => {
          const { id } = params;
          this.postService.getPostById(id)
            .subscribe(resultPost => this.post = resultPost);
        });
      }

    });

    this.comments = this.route.snapshot.data.comments as PostComment[];
  }

}
