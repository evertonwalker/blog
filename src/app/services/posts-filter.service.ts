import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { Post } from '../interfaces/post.interface';

@Injectable({
    providedIn: 'root'
})
export class PostDataService {

    filterPosts = new Subject<string>();
    currentPost = new BehaviorSubject<Post>(undefined);

    constructor() { }
}
