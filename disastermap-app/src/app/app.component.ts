import { Component, OnInit } from '@angular/core';
import {MapService} from './map.service';
declare var google: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;
  // item: any = {lat: 56.1304, lon: 106.3468};
  latLonArray: any[] = [{lat: 56.1304, lon: -106.3468}];
  ngOnInit(){
    console.log(this.latLonArray);
    // console.log(this.item);
  }
}

