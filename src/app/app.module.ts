import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './components/header/header.component';
import { LayoutRouterComponent } from './components/layout-router/layout-router.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './shared/post/post.component';
import { CommentComponent } from './shared/comment/comment.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LayoutRouterComponent,
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
