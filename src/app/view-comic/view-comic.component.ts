import { ComicComponent } from './../comic/comic.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-view-comic',
  templateUrl: './view-comic.component.html',
  styleUrls: ['./view-comic.component.css']
})
export class ViewComicComponent implements OnInit {

  private comic;

  constructor(
    private route: ActivatedRoute,
    private comicService: ComicComponent,
    private location: Location,
    
  ) { 
    
  }

  ngOnInit() {
    this.showComic();
  }

  showComic() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.comicService.getDataById(id).subscribe(
      data =>{
        this.comic = data.data.results[0];
        console.log(this.comic.title);
        console.log(this.comic.prices[0].price);
      } 
    );
    
  }

  goBack(): void {
    this.location.back();
  }

}

