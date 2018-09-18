import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
// import { MatButtonModule } from '@angular/material/button';

import {FormsModule, ReactiveFormsModule, FormControl} from '@angular/forms';
import { MapService } from './map.service';
import { longLat } from '../assets/longitude-latitude';
import { InputRadioProps, InputRadioSetComponent } from 'src/app/components/input/radio-set';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(private mapService: MapService) { }
  // @ViewChild(InputRadioSetComponent) child: any;

  longLat = longLat;
  public allNews: any = [];
  public selectedNews: any = [];
  public codes: Object = {};
  public selectedCountry: string = '';
  public keyword = new FormControl('');
  public category:string="";
  public categoryFilterSet: InputRadioProps = {
    initialValue: '',
    inputSet: [
      {
        label: 'all',
        value: 'all',
      },
      {
        label: 'business',
        value: 'business',
      },
      {
        label: 'entertainment',
        value: 'entertainment',
      },
      {
        label: 'general',
        value: 'general',
      },
      {
        label: 'health',
        value: 'health',
      },
      {
        label: 'science',
        value: 'science',
      },
      {
        label: 'sports',
        value: 'sports',
      },
      {
        label: 'technology',
        value: 'technology',
      }
    ]
  };

  public ngOnInit(): void {
    this.getCountries();
    this.getNews();
  }

  search(){
    console.log(this.keyword.value);
    this.mapService.getNews({category: this.category, keyword: this.keyword.value}).subscribe((news)=>{
      this.allNews = news;
      this.selectedCountry = '';
    })
  }

  getCategory(category: any){
    this.category = category;
    console.log(this.category);
  }
  getCountries() {
      this.mapService.getCountries().subscribe((data) => {
        this.codes = data;
        console.log(this.codes);
      });

  }

  getNews() {
      this.mapService.getNews({}).subscribe((news) => {
        this.allNews = news;
        console.log(this.allNews);
      });
  }

  // ngAfterViewInit() {
  //   this.category = this.child.value;
  //   console.log('HASLDFKASDLKFALSDKFJALSDKFJALSDKF' +this.category);
  // }
  click(name: string) {

    this.selectedCountry = name;
    console.log(this.selectedCountry);
    this.selectedNews = this.allNews.filter((news: any) =>
      news.country === this.selectedCountry,
    );
    console.log(this.selectedNews);
  }

  test() {
    this.mapService.test().subscribe(data => {
      console.log(data);
    });
  }
}
