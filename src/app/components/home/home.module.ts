import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { HomeRoutingModule } from './home-routing.module';
import { PostComponent } from 'src/app/shared/post/post.component';
import { PostCommentsComponent } from './post-comments/post-comments.component';
import { CommentComponent } from 'src/app/shared/comment/comment.component';

@NgModule({
    imports: [CommonModule, HomeRoutingModule],
    declarations: [HomeComponent, IndexComponent, PostComponent, PostCommentsComponent, CommentComponent],
})
export class HomeModule { }
