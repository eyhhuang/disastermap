import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { AgmOverlays } from 'agm-overlays';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmOverlays, HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDjLrZaifz5VwkGtWLCu296LkxC8vIX2kY'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
