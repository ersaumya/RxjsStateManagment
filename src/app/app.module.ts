import { SongsModule } from './songs/songs.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Store } from './store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SongsModule,
    AppRoutingModule
  ],
  providers: [Store],
  bootstrap: [AppComponent]
})
export class AppModule { }
