import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { YearlyInfoComponent } from './yearly-info/yearly-info.component';
import { MonthlyInfoComponent } from './monthly-info/monthly-info.component';
import { LocalStorageComponent } from './_services/local-storage/local-storage.component';

@NgModule({
  declarations: [
    AppComponent,
    YearlyInfoComponent,
    MonthlyInfoComponent,
    LocalStorageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
