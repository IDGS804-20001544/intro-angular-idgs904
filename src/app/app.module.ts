import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { escuelaComponent } from './escuela/escuela.component';
import { AlumnosIevn } from './escuela/ievn.components';
import { IricComponent } from './escuela/iric/iric.component';

@NgModule({
  declarations: [
    AppComponent,
    escuelaComponent,
    AlumnosIevn,
    IricComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
