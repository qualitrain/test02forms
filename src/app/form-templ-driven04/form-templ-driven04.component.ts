import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-form-templ-driven04',
  templateUrl: './form-templ-driven04.component.html',
  styleUrls: ['./form-templ-driven04.component.css']
})
export class FormTemplDriven04Component implements OnInit {
  //Encender o apagar para que salga una explicación del demo en la vista
  explicacionOn:boolean = false;
  //Encender o apagar para monitorear campos de estado
  debugOn:boolean = false;
 
  //objeto-modelo
  telefonos = {
    tel1:"",
    tel2:""
  }

  constructor(private fBuilder:FormBuilder) { 
  }

  ngOnInit(): void {
  }
  insertarTelefonos(formulario){
    console.log(formulario.value);
    formulario.reset();
  }
  prenderApagarExplicacion(){
    if(this.explicacionOn)
      this.explicacionOn = false;
    else
      this.explicacionOn = true;
  }

}
