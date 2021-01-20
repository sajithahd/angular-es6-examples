import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { FilterComponent } from "./filter.component";
import { WaitForObservables } from "./wait-for-observables";
import { MapsAndSetsComponent } from "./maps-and-sets";
import { WaitForObservables2 } from "./wait-for-observables2";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    FilterComponent,
    WaitForObservables,
    WaitForObservables2,
    MapsAndSetsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
