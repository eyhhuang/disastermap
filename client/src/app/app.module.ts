import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AgmOverlays } from 'agm-overlays';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from 'src/app/app.component';
import { InputTextComponent } from 'src/app/components/input/text';
import { InputRadioSetComponent } from 'src/app/components/input/radio-set';

@NgModule({
  declarations: [
    AppComponent,
    InputTextComponent,
    InputRadioSetComponent,
  ],
  imports: [
    BrowserModule,
    AgmOverlays,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDjLrZaifz5VwkGtWLCu296LkxC8vIX2kY'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
