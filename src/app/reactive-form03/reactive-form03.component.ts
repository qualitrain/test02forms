import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, AbstractControl } from '@angular/forms';

import { Direccion } from '../entidades/direccion';

@Component({
  selector: 'app-reactive-form03',
  templateUrl: './reactive-form03.component.html',
  styleUrls: ['./reactive-form03.component.css']
})
export class ReactiveForm03Component implements OnInit {
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

  //objeto auxiliar para agregar propiedades a un objeto dinámicamente
  readonly descriptorProp = {
    enumerable: true,
    writable: true,
    configurable: true,
    value: null   
  }

  constructor() { }

  ngOnInit(): void {
    this.formulario = this.getFormGroup(this.direccion);
    this.formulario.setValue(this.direccion);
  }
  getFormGroup(objModelo:any):FormGroup{
      let controles:any = this.getControls(objModelo);
      return new FormGroup( controles );
  }
  getControls(objetoModelo):any {
    //Arma el objeto de campos vs FormControls con base en el objeto-modelo a usar por el formulario
    let objConfigControles:any = new Object();
    for(let prop in objetoModelo){
      Object.defineProperty(objConfigControles, prop, this.descriptorProp);
      objConfigControles[prop] = new FormControl('');
    }
    return objConfigControles;
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
