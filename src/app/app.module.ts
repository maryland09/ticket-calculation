import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TicketCalculationComponent } from './ticket-calculation/ticket-calculation.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketCalculationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
