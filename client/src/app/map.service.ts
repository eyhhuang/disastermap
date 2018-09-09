import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class MapService {
  mapapi: string = environment.api;
  constructor(private http: HttpClient) { }

  getCountries() {
    return this.http.get(this.mapapi + '/countryMap');
  }

  test() {
    return this.http.get(this.mapapi + '/ping');
  }

  getNews() {
    console.log(this.mapapi + '/news');
    
    return this.http.get(this.mapapi + '/news');

  }
}
