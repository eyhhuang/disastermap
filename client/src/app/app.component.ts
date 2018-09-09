import { Component, OnInit } from '@angular/core';

import { MapService } from './map.service';
import { longLat } from '../assets/longitude-latitude';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private mapService: MapService) { }
  longLat = longLat;
  public allNews : any = [];
  public selectedNews: any = [];
  public codes : Object = {};
  public selectedCountry: string = "";
  public ngOnInit(): void {
    this.getCountries();
    this.getNews();
  }

  getCountries(){
      this.mapService.getCountries().subscribe((data)=> {
        this.codes = data;
        console.log(this.codes);
      });

  }

  getNews() {
      this.mapService.getNews().subscribe((news)=>{
        this.allNews = news;
        console.log(this.allNews);
      });
  }

  click(name: string) {

    this.selectedCountry = name;
    console.log(this.selectedCountry);
    this.selectedNews = this.allNews.filter((news:any)=>news.country===this.selectedCountry);
    console.log(this.selectedNews);
    // this.mapService.getData(name).subscribe(data => {
    //   console.log(data);
    // });
    

  }

  test() {
    this.mapService.test().subscribe(data => {
      console.log(data);
    });
  }
}
