import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'intro-angular-idgs904';
  dupliValor(valor:number):number{
   return valor*2
  }

  //objetos

  Alumnos={
    matricula:1234,
    nombre:'Axel',
    fechaNacimiento:new Date(),
    pagoIns: 2759.00
  };
}
