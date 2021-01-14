import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FilterComponent } from './filter.component';
import { WaitForObservables } from './wait-for-observables';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, FilterComponent, WaitForObservables ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
