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
    { mostrar:true,  descripcion:'Validaciones formulario reactivo',       clasesCss:'bg-secondary text-white' }
  ];
 
  title = 'test02Forms';

  activarDesactivarEjemplo(n:number):void{
    if(this.ejemplos[n].mostrar)
      this.ejemplos[n].mostrar = false;
    else
      this.ejemplos[n].mostrar = true;
  }

}
