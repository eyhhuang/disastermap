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

  getNews(params: any) {
    let category = params.category;
    let keyword = params.keyword;

    let url = `${this.mapapi}/news`;
    if (category === undefined) category = 'all';
    
    if (category !== 'all' && keyword) {
      url += `?q={keyword}&category={category}`;
    } else if (category !== 'all') {
      url += `?category=${category}`;
    } else if (keyword) {
      url += `?q=${keyword}`;
    }

    return this.http.get(url);
  }

}
