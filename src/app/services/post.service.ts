import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/post.interface';
import { PostComment } from '../interfaces/post-comment.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getCommentsByPost(id: number): Observable<PostComment[]> {
    return this.http.get<PostComment[]>(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
  }

  getPostById(id: number): Observable<Post> {
    return this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }


}
