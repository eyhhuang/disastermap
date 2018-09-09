import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  mapapi: string = environment.api;
  constructor(private http: HttpClient) { }

  getCountries() {
    return this.http.get(`${this.mapapi}/countryMap`);
  }

  test() {
    return this.http.get(`${this.mapapi}/ping`);
  }
  getData(name: string) {
    return this.http.get(
      `${this.mapapi}/endpoint/${name}`,
      { observe: 'response' },
    );
  }

  getNews() {
    console.log(`${this.mapapi}/news`);
    return this.http.get(`${this.mapapi}/news`);
  }
}
