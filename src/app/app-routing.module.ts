import { ViewComicComponent } from './view-comic/view-comic.component';
import { ComicComponent } from './comic/comic.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: '/comics', pathMatch: 'full'},
  {path: 'comics', component: ComicComponent},
  {path: 'comic-detail/:id', component: ViewComicComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
