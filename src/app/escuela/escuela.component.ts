import { Component } from "@angular/core";

@Component({
    selector:'app-escuela',//referenciamos el componente
    template: `
    <form>
    <label>Nombre:</label>
    <input type="text" value="">
    <button class="btn btn-primary">Ingresar</button>
    </form>`
})
export class escuelaComponent{
    constructor(){}
}

