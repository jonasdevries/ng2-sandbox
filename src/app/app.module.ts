import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }  from '@angular/http';
import { FormsModule }  from '@angular/forms';

import { AppComponent }  from './app.component';
import { PositionsComponent }  from './components/positions.component';
import { LoadPositionsComponent }  from './components/load-positions.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule],
  declarations: [ AppComponent, PositionsComponent, LoadPositionsComponent],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
