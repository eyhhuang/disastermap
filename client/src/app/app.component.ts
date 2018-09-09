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
  public allNews : object = [];
  public selectedNews: object = [];
  public codes : object = {};
  public selectedCountry: string = "";
  public ngOnInit(): void {
    this.getCountries();
    this.getNews();
    console.log(this.allNews);
    console.log('HERE');
    console.log(this.codes);
  }

  getCountries(){
      this.mapService.getCountries().subscribe(data=>this.codes = data);
  }

  getNews() {
      this.mapService.getNews().subscribe(news=>this.allNews = news);
  }

  click(name: string) {

    this.selectedCountry = name;
    console.log(this.selectedCountry)
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
