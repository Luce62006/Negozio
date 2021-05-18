import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserCardComponent } from './header1/user-card/user-card.component';
import { Header1Component } from './header1/header1.component';

@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    Header1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
