import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calificacion-alumn',
  templateUrl: './calificacion-alumn.component.html',
  styleUrls: ['./calificacion-alumn.component.css']
})
export class CalificacionAlumnComponent {
  @Input() califica:number=3;
  @Output() calificaClick:EventEmitter<string>= new EventEmitter();
  starWidth!:number;

  ngOnChanges():void{
    this.starWidth=this.califica*76/10;
  }
  onClick(){
    this.calificaClick.emit(`${this.califica}`)
  }
}
