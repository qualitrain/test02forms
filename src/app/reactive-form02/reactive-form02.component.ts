import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form02',
  templateUrl: './reactive-form02.component.html',
  styleUrls: ['./reactive-form02.component.css']
})
export class ReactiveForm02Component implements OnInit {

  formulario:FormGroup;

  //Encender o apagar para que salga una explicación del demo en la vista
  explicacionOn:boolean = false;

  readonly direccionDefault = {
    calle:"Av. Patriotismo",
    numeroExt:"878"
  }
  
  constructor() { }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      calle: new FormControl(''),
      numeroExt: new FormControl('')
    });
  }
  setDireccionDefault(){
    this.formulario.setValue(this.direccionDefault);
  }
  prenderApagarExplicacion(){
    if(this.explicacionOn)
      this.explicacionOn = false;
    else
      this.explicacionOn = true;
  }
}
