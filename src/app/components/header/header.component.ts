import { Component, OnInit } from '@angular/core';
import { PostDataService } from 'src/app/services/posts-filter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private postDataService: PostDataService) { }

  ngOnInit(): void {
  }

  search(terms: string): void {
    this.postDataService.filterPosts.next(terms);
  }

}
