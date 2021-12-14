import {DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TicketCalculationComponent } from './ticket-calculation/ticket-calculation.component';
import {FormsModule} from "@angular/forms";

import {registerLocaleData} from "@angular/common";
import localeRu from '@angular/common/locales/ru';
import localeRuExtra from '@angular/common/locales/extra/ru';
registerLocaleData(localeRu, 'ru-RU', localeRuExtra);

@NgModule({
  declarations: [
    AppComponent,
    TicketCalculationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'ru-Ru'},
    {provide: DEFAULT_CURRENCY_CODE, useValue: 'RUB'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
