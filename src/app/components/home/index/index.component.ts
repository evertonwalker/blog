import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/interfaces/post.interface';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { PostDataService } from 'src/app/services/posts-filter.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  posts: Post[];
  oldsPosts: Post[] = [];

  constructor(private postService: PostService, private postDataService: PostDataService) { }

  ngOnInit(): void {

    this.postDataService.filterPosts.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(resultTerms => this.filterByTerms(resultTerms));

    this.postService.getPosts()
      .subscribe(resultPots => {
        this.posts = resultPots;
        this.oldsPosts = JSON.parse(JSON.stringify(this.posts));
      });
  }

  filterByTerms(terms: string): void {
    if (terms !== '') {
      this.posts = this.oldsPosts.filter(it => it.title.toLowerCase().includes(terms.toLowerCase()));
    } else {
      this.posts = this.oldsPosts;
    }
  }

}
