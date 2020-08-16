import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { PostCommentsComponent } from './post-comments/post-comments.component';
import { PostCommentsResolve } from './post-comments.resolve';

const homeRoutes: Routes = [
    {
        path: '',
        component: IndexComponent,
    },
    {
       component: PostCommentsComponent, path: 'comment/:id', resolve: {
            comments: PostCommentsResolve
        }
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(homeRoutes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
