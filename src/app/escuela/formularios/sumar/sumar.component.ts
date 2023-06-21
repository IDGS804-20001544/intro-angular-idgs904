import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-sumar',
  templateUrl: './sumar.component.html',
  styleUrls: ['./sumar.component.css'],
})
export class SumarComponent {
num1='';
num2='';
resultado:number=0;

sumar(){
  this.resultado=parseInt(this.num1)+parseInt(this.num2)
}

}
