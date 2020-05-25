import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

import { Direccion } from '../entidades/direccion';

@Component({
  selector: 'app-reactive-form05-valid',
  templateUrl: './reactive-form05-valid.component.html',
  styleUrls: ['./reactive-form05-valid.component.css']
})
export class ReactiveForm05ValidComponent implements OnInit {

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

  //spec del objeto-modelo para el argumento del builder
  specBuildFormulario = {
    calle:["",[
       Validators.required,
       Validators.pattern(/^[\wÁÉÍÓÚáéíóú][\wÁÉÍÓÚáéíóú\s'.]{2}[\wÁÉÍÓÚáéíóú\s]*/),
       this.validadorPalSinSentido
      ]],
    numeroExt:["",[
      Validators.required,
      ]],
    numeroInt:["",[ 
      Validators.pattern(/^$|^\d{1,}$|^\d{1,}-[A-Z]{1,}$|^[A-Z]{1,}\d{0,}$/)
      ]],
    colonia:["", [
      this.validadorPalSinSentido
    ]],
    cp:["",[
      Validators.required,
      Validators.pattern(/^\d{5}$/),
    ]],
    cveEstado:0,
    cveMunicipio:0
  }
  //Atajos
  get calle(){
    return this.formulario.get('calle');
  }
  get numeroExt(){
    return this.formulario.get('numeroExt'); 
  }
  get numeroInt(){
    return this.formulario.get('numeroInt'); 
  }
  get colonia(){
    return this.formulario.get('colonia');
  }
  get cp(){
    return this.formulario.get('cp');
  }

  direccion:Direccion = {
    calle:"",
    numeroExt:"",
    numeroInt:"",
    colonia:"",
    cp:"",
    cveEstado:1,
    cveMunicipio:0
  }

  constructor(private fBuilder:FormBuilder) { 
  }

  ngOnInit(): void {
    this.formulario = this.fBuilder.group(this.specBuildFormulario);
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

  validadorPalSinSentido(control:AbstractControl):ValidationErrors{
    let valor:string = control.value;
    if(valor.length < 2)
      return null;

    let vocalRegEx:RegExp = /[AEIOUÁÉÍÓÚ]/gi;
    let consonantesRegEx:RegExp = /[B-DF-HJ-NÑP-TV-Z]/gi;
    let vocalesRepetidasRegEx:RegExp = /A{2,}|E{3,}|I{2,}|O{3,}|U{2,}/i;
    let porcenMinVocales = 0.30;
    let porcenMaxVocales = 0.60;

    let arrCoincidencias = valor.match(vocalRegEx);
    let nVocales = arrCoincidencias === null ? 0 : arrCoincidencias.length;

    arrCoincidencias = valor.match(consonantesRegEx);
    let nConsonantes = arrCoincidencias === null ? 0 : arrCoincidencias.length;

    let porcenVocales = nVocales / (nVocales + nConsonantes); 
    console.log("nVocales:" + nVocales, ", nConsonantes:" + nConsonantes + ", % vocales:" + porcenVocales);
    if(porcenVocales < porcenMinVocales){ //Muy pocas vocales
      return {palabrasSinSentido:true};
    }
    if(porcenVocales > porcenMaxVocales){ //Demasiadas vocales
      return {palabrasSinSentido:true};
    }
    if(vocalesRepetidasRegEx.test(valor)){ //Contiene demasiadas vocales consecutivas repetidas
      return {palabrasSinSentido:true};     
    }
    return null;
  }

}
