import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calificacion-alumn',
  templateUrl: './calificacion-alumn.component.html',
  styleUrls: ['./calificacion-alumn.component.css']
})
export class CalificacionAlumnComponent {
  @Input() califica:number=3;
  starWidth!:number;

  ngOnChange():void{
    this.starWidth=this.califica*76/10;
  }
}
