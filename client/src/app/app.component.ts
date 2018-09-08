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
  public title: string = 'My first AGM project';
  public lat: number = 51.678418;
  public lng: number = 7.809007;
  public longLat = longLat;
  public ngOnInit(): void {
    console.log(this.longLat);
  }

  click(name: string) {
    console.log(name);
    this.mapService.getData(name).subscribe(data => {
      console.log(data);
    });
  }

  test() {
    this.mapService.test().subscribe(data => {
      console.log(data);
    });
  }
}
