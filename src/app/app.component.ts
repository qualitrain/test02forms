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
    { mostrar:false, descripcion:'Formulario con Validación manual',      clasesCss:'table-warning' },
    { mostrar:false, descripcion:'Formulario con Validación incorporada', clasesCss:'table-success' },
    { mostrar:false, descripcion:'FormControl',                           clasesCss:'table-info' },
    { mostrar:false,  descripcion:'FormGroup',                            clasesCss:'table-primary' },
    { mostrar:false,  descripcion:'Formulario reactivo, sin validaciones', clasesCss:'table-secondary' },
    { mostrar:false,  descripcion:'FormBuilder',                            clasesCss:'table-danger' },
    { mostrar:false,  descripcion:'Validaciones formulario reactivo',       clasesCss:'bg-secondary text-white' },
    { mostrar:false,  descripcion:'Validador personalizado en driven template', clasesCss:'bg-info text-white' },
    { mostrar:false,  descripcion:'Validación cross-field en reactive form', clasesCss:'bg-success text-white' },
    { mostrar:false,  descripcion:'Validación cross-field en template driven', clasesCss:'bg-warning ' },
    { mostrar:false,  descripcion:'Validación asíncrona en reactive form', clasesCss:'bg-danger text-white' }
  ];
 
  title = 'test02Forms';

  activarDesactivarEjemplo(n:number):void{
    if(this.ejemplos[n].mostrar)
      this.ejemplos[n].mostrar = false;
    else
      this.ejemplos[n].mostrar = true;
  }

}
