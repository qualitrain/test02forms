import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Direccion } from '../entidades/direccion';

@Component({
  selector: 'app-reactive-form04',
  templateUrl: './reactive-form04.component.html',
  styleUrls: ['./reactive-form04.component.css']
})
export class ReactiveForm04Component implements OnInit {

  //Fuentes de datos
  municipiosCdMx:string[] = ['Miguel Hidalgo','Benito Juárez','Álvaro Obregón','Cuajimalpa','Cuauhtémoc'];
  municipiosEdoMx:string[] = ['Nezahualcóyotl','Naucalpan','Toluca','Ecatepec','Tultitlán'];
  municipiosPue:string[] = ['Amozoc','Tehuacán','Cozcatlán','Cholula','Atlixco'];
  municipiosMor:string[] = ['Cuautla','Cuernavaca','Jojutla','Temixco','Yautepec'];
  municipiosHgo:string[] = ['Atotonilco de Tula','Huasca de Ocampo','Huichapan','Ixmiquilpan','Mineral del Monte','Pachuca de Soto'];
  estados:string[] = ['Ciudad de México', 'Estado de México', 'Puebla', 'Morelos','Hidalgo'];

  municipios = [this.municipiosCdMx,this.municipiosEdoMx, this.municipiosPue, this.municipiosMor, this.municipiosHgo];

  //Encender o apagar para que salga una explicación del demo en la vista
  explicacionOn:boolean = false;

  //Repositorio
  direcciones:Direccion[] = [];

  // objeto de enlace entre el template y el controlador
  formulario:FormGroup;

  //objeto-modelo
  direccion:Direccion = {
    calle:"",
    numeroExt:"",
    numeroInt:"",
    colonia:"",
    cp:"",
    cveEstado:0,
    cveMunicipio:0
  }

  constructor(private fBuilder:FormBuilder) { 
  }

  ngOnInit(): void {
    this.formulario = this.fBuilder.group(this.direccion);
    this.formulario.setValue(this.direccion);
  }
  insertarDireccion(){
    this.direcciones.push(this.formulario.value);
    this.formulario.reset(this.direccion);
  }
  prenderApagarExplicacion(){
    if(this.explicacionOn)
      this.explicacionOn = false;
    else
      this.explicacionOn = true;
  }

}
