import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MapService {
  mapapi: string = environment.api;
  constructor() { }

  getCountries(){
    return [{lat: 56.1304, lon: -106.3468}]; 
  }
}
