import { Component } from '@angular/core';

class Ejemplo{
    mostrar:boolean;
    descripcion:string;
    clasesCss:string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ejemplos:Ejemplo[] = [
    { mostrar:false, descripcion:'Mostrar/Ocultar ejemplo de Formulario con Validación manual',     clasesCss:'table-warning' },
    { mostrar:false, descripcion:'Mostrar/Ocultar ejemplo de Formulario con Validación incorporada',clasesCss:'table-success' },
    { mostrar:false, descripcion:'Mostrar/Ocultar ejemplo de FormControl',                          clasesCss:'table-info' },
    { mostrar:true,  descripcion:'Mostrar/Ocultar ejemplo de FormGroup',                            clasesCss:'table-primary' }
  ];
 
  title = 'test02Forms';

  activarDesactivarEjemplo(n:number):void{
    if(this.ejemplos[n].mostrar)
      this.ejemplos[n].mostrar = false;
    else
      this.ejemplos[n].mostrar = true;
  }

}
