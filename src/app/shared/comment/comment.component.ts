import { Component, OnInit, Input } from '@angular/core';
import { PostComment } from 'src/app/interfaces/post-comment.interface';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() comment: PostComment;

  constructor() { }

  ngOnInit(): void {
  }

}
