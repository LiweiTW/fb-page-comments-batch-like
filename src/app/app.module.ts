import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';


import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PageTokenComponent } from './page-token/page-token.component';
import { PostService } from './post.service';
import { GraphService } from './graph.service';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PageTokenComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    PostService,
    GraphService,
    { provide: 'LOCALSTORAGE', useFactory: getLocalStorage }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function getLocalStorage() {
  return (typeof window !== "undefined") ? window.localStorage : null;
}