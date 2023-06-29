import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { escuelaComponent } from './escuela/escuela.component';
import { AlumnosIevn } from './escuela/ievn.components';
import { IricComponent } from './escuela/iric/iric.component';
import { MenuComponent } from './escuela/menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SumarComponent } from './escuela/formularios/sumar/sumar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OperasModule } from './escuela/formularios/operas/operas.module';
import { MatButtonModule } from '@angular/material/button';
import { AlumnosFilterPipe } from './escuela/alumnos-filter.pipe';
import { CalificacionAlumnComponent } from './escuela/calificacion-alumn/calificacion-alumn.component';
import { AlumnoReactiveComponent } from './formularios/alumno-reactive/alumno-reactive.component';




@NgModule({
  declarations: [
    AppComponent,
    escuelaComponent,
    AlumnosIevn,
    IricComponent,
    MenuComponent,
    SumarComponent,
    AlumnosFilterPipe,
    CalificacionAlumnComponent,
    AlumnoReactiveComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    OperasModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
