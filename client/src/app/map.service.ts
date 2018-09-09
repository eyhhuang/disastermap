import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MapService {
  mapapi: string = environment.api;
  constructor(private http: HttpClient) { }

  getCountries() {
    return this.http.get(this.mapapi+'/countryMap');
  }

  test() {
    return this.http.get(this.mapapi + '/ping');
  }

  getData() {
    return this.http.get(this.mapapi + '/news', { observe: 'response' });
  }
}
