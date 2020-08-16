import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { PostComment } from 'src/app/interfaces/post-comment.interface';
import { PostService } from 'src/app/services/post.service';
import { map, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class PostCommentsResolve implements Resolve<PostComment[]> {
    constructor(private postSerivce: PostService, private router: Router) {
    }

    resolve(route: ActivatedRouteSnapshot): Observable<PostComment[]> {

        const postId = route.params.id;

        if (isNaN(+postId)) {
            this.router.navigate(['/']);
            return of(null);
        }

        return this.postSerivce.getCommentsByPost(postId)
            .pipe(
                map(result => {
                    if (result) {
                        return result;
                    } else {
                        this.router.navigate(['/']);
                        return null;
                    }
                }),
                catchError(error => {
                    this.router.navigate(['/']);
                    return of(null);
                })
            );
    }
}
