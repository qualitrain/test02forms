import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form01',
  templateUrl: './reactive-form01.component.html',
  styleUrls: ['./reactive-form01.component.css']
})
export class ReactiveForm01Component implements OnInit {

  formControl01:FormControl;

  //Encender o apagar para que salga una explicación del demo en la vista
  explicacionOn:boolean = false;

  // RegExp que identifica Cadenas de 2 o más espacios con alcance global
  readonly regExGpoEspacios:RegExp = /\s{2,}/g;

  constructor() {
  }
  
  ngOnInit(): void {
    this.formControl01 = new FormControl('');
    
    this.formControl01.valueChanges.subscribe(valor => {
      console.log('Valor cambió:', valor);
    });
    
    this.formControl01.statusChanges.subscribe(status => {
      console.log('Estado cambió:', status);
    });
    
  }
  eliminarGuposDeEspaciosCalle(){
    let valor:string = this.formControl01.value;
    let valTrimed:string = valor.trim().replace(this.regExGpoEspacios,' ');
    this.formControl01.setValue(valTrimed);
  }
  prenderApagarExplicacion(){
    if(this.explicacionOn)
      this.explicacionOn = false;
    else
      this.explicacionOn = true;
  }

}
 