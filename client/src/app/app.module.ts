import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AgmOverlays } from 'agm-overlays';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from 'src/app/app.component';
import { InputRadioSetComponent} from 'src/app/components/input/radio-set';
import { MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    InputRadioSetComponent,

  ],
  imports: [
    BrowserModule,
    AgmOverlays,
    HttpClientModule,
    MatButtonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDjLrZaifz5VwkGtWLCu296LkxC8vIX2kY'
    })
  ],
  exports: [
      MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
