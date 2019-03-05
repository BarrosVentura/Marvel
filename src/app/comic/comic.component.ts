import { Component, OnInit, Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Md5} from 'ts-md5/dist/md5';

@Injectable()
@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['../view/view.component.css']
})


export class ComicComponent implements OnInit {
  title = 'Its alive!';
  public comics = [];
  private topReadComics : any = [];
  private publicKey = 'dfda30705779ba499a12d36d60395241';
  private privateKey = 'b859b98c17c19db065390586fe7a179c664c550c';
  private horas = Date.now();
  private conjunto = this.horas + this.privateKey + this.publicKey;
  private hash = Md5.hashStr(this.conjunto);
  private apiUrl = "https://gateway.marvel.com:443/v1/public/comics?format=comic&dateRange=2018-01-01%2C%202018-12-31&hasDigitalIssue=true&orderBy=onsaleDate&limit=80&ts="+this.horas+"&apikey="+this.publicKey+"&hash="+this.hash;
  

  constructor(private http: HttpClient) { 
  }

  ngOnInit(){
    console.log('Hello fellow user');
    this.showData();
  }

  showData()  {
    this.getData().subscribe(

      data => {
        Rare(data.data.results, 3);
        this.topReadComics = TopRead(data.data.results);
        this.comics = data.data.results;
      }

    );
  }

  getData() : any{
    return this.http.get<any>(this.apiUrl);
  }

  getDataById(id : number) : any{
    return this.http.get("https://gateway.marvel.com:443/v1/public/comics/"+id+"?format=comic&formatType=comic&noVariants=true&dateDescriptor=thisMonth&limit=50&ts="+this.horas+"&apikey="+this.publicKey+"&hash="+this.hash);
  }


}

function Rare(data, stop : number){
  let counter : number = 0;
  for (let index = 0; index < data.length; index++) {
    let isRare = Math.floor(Math.random() * 10);
    if (counter <= stop) {
      if (isRare == 1) {
        data[index].rare =  true;
        counter = counter + 1;
      } else if (isRare == 4) {
        data[index].rare =  false;
        data[index].topread = true;
      } else{
        data[index].rare = false;
      }
    }
  }
}

function TopRead(data) : any{
  let topRead = [];

  for (let index = 0; index < data.length; index++) {
    if(data[index].topread){
      topRead.push(data[index]);
    }
  }
  return topRead;
}