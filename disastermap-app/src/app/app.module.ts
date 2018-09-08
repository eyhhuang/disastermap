import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { AgmOverlays } from "agm-overlays";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmOverlays,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDjLrZaifz5VwkGtWLCu296LkxC8vIX2kY'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
