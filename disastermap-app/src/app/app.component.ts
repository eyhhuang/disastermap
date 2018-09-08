import { Component, OnInit } from '@angular/core';

import {MapService} from './map.service';
import {longLat, CountryCode} from '../assets/longitude-lagitude'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;
  longLat = longLat;
  // item: any = {lat: 56.1304, lon: 106.3468};
  latLonArray: number[][] = [[56.1304, -106.3468],[50,-6] ];
  ngOnInit(){
    console.log(longLat);
    console.log(this.latLonArray);
  }
}

