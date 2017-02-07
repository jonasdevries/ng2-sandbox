import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }  from '@angular/http';

import { AppComponent }  from './app.component';
import { SandBoxComponent }  from './components/sandbox.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule],
  declarations: [ AppComponent, SandBoxComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
