import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { ViewComicComponent } from './view-comic/view-comic.component';
import { ComicComponent } from './comic/comic.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    ViewComicComponent,
    ComicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports:[
    ComicComponent
  ],
  providers: [ComicComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
