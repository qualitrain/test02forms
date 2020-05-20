import { Component, OnInit, DoCheck } from '@angular/core';
import { Direccion } from '../entidades/direccion';

@Component({
  selector: 'app-form-templ-driven01',
  templateUrl: './form-templ-driven01.component.html',
  styleUrls: ['./form-templ-driven01.component.css']
})
export class FormTemplDriven01Component implements OnInit, DoCheck {
  
  //Encender o apagar para que salga una explicación del demo en la vista
  explicacionOn:boolean = false;
  //Encender o apagar para monitorear comportamiento del formulario
  depuracionOn:boolean=false;

  //Variables que reflejan el estado de validación de los campos de captura
  calleOk=false;
  avisarErrorCalle=false;

  numeroExtOk=false;
  avisarErrorNumExt=false;

  coloniaOk=false;
  avisarErrorColonia=false;

  cpOk=false;
  avisarErrorCp=false;
  regexCp:RegExp=/^\d{5}$/;

  cveEstadoOk=false;
  avisarErrorCveEstado=false;

  cveMunicipioOk=false;
  avisarErrorCveMunicipio=false;

  //Modelo
  direccionForm:Direccion;

  //Fuentes de datos
  municipiosCdMx:string[] = ['Miguel Hidalgo','Benito Juárez','Álvaro Obregón','Cuajimalpa','Cuauhtémoc'];
  municipiosEdoMx:string[] = ['Nezahualcóyotl','Naucalpan','Toluca','Ecatepec','Tultitlán'];
  municipiosPue:string[] = ['Amozoc','Tehuacán','Cozcatlán','Cholula','Atlixco'];
  municipiosMor:string[] = ['Cuautla','Cuernavaca','Jojutla','Temixco','Yautepec'];
  municipiosHgo:string[] = ['Atotonilco de Tula','Huasca de Ocampo','Huichapan','Ixmiquilpan','Mineral del Monte','Pachuca de Soto'];
  estados:string[] = ['Ciudad de México', 'Estado de México', 'Puebla', 'Morelos','Hidalgo'];

  municipios = [this.municipiosCdMx,this.municipiosEdoMx, this.municipiosPue, this.municipiosMor, this.municipiosHgo];
  direcciones:Direccion[] = [];
  
  constructor() { }

  ngOnInit(): void {
    this.direccionForm = this.crearDireccionVacia();
  }
  ngDoCheck(): void {
    console.log('ngDoCheck()');
    this.direccionForm.calle = this.direccionForm.calle.trim();
    this.direccionForm.numeroExt = this.direccionForm.numeroExt.trim();
    this.direccionForm.numeroInt = this.direccionForm.numeroInt.trim();
    this.direccionForm.colonia = this.direccionForm.colonia.trim();
    this.direccionForm.cp = this.direccionForm.cp.trim();
  }
  crearDireccionVacia():Direccion{
    return new Direccion('','','','','',-1,-1);
  }
  get diagnostico() {
    console.log("diagnostico()");
    return JSON.stringify(this.direccionForm).replace(/,/g, ', ');
  }
  mostrarDireccion(){
    console.log(JSON.stringify(this.direccionForm));
  }
  insertarDireccion(){
    this.direcciones.push(this.direccionForm);
    this.direccionForm =this.crearDireccionVacia();
  }
  validarCalle():void{
    console.log("this.validarCalle()");
    this.direccionForm.calle = this.direccionForm.calle.trim();
    if(this.calleCumpleReglas() === false){
      this.calleOk = false;
      this.avisarErrorCalle = true;
    }
    else{
      this.calleOk = true;
      this.avisarErrorCalle = false;
    }
  }
  calleCumpleReglas(){
    if(this.direccionForm.calle.length == 0)
      return false;
    else
      return true;
  }
  validarNumeroExt():void{
    console.log("this.validarNumeroExt()");
    this.direccionForm.numeroExt = this.direccionForm.numeroExt.trim();
    if(this.numeroExtCumpleReglas() === false){
      this.numeroExtOk = false;
      this.avisarErrorNumExt = true;
    }
    else{
      this.numeroExtOk = true;
      this.avisarErrorNumExt = false;
    }
  }
  numeroExtCumpleReglas(){
    if(this.direccionForm.numeroExt.length == 0)
      return false;
    else
      return true;
  }
  validarColonia():void{
    console.log("this.validarColonia()");
    this.direccionForm.colonia = this.direccionForm.colonia.trim();
    if(this.coloniaCumpleReglas() === false){
      this.coloniaOk = false;
      this.avisarErrorColonia = true;
    }
    else{
      this.coloniaOk = true;
      this.avisarErrorColonia = false;
    }
  }
  coloniaCumpleReglas(){
    if(this.direccionForm.colonia.length == 0)
      return false;
    else
      return true;
  }
  validarCp():void{
    console.log("this.validarCp()");
    this.direccionForm.cp = this.direccionForm.cp.trim();
    if(this.cpCumpleReglas() === false){
      this.cpOk = false;
      this.avisarErrorCp = true;
    }
    else{
      this.cpOk = true;
      this.avisarErrorCp = false;
    }
  }
  cpCumpleReglas(){
    if(this.direccionForm.cp.length == 0)
      return false;
    if(this.regexCp.test(this.direccionForm.cp) === false)
      return false
    return true;
  }
  validarCveEstado():void{
    console.log("this.validarCveEstado()");
    this.direccionForm.cveMunicipio = -1;
    if(this.cveEstadoCumpleReglas() === false){
      this.cveEstadoOk = false;
      this.avisarErrorCveEstado = true;
    }
    else{
      this.cveEstadoOk = true;
      this.avisarErrorCveEstado = false;
    }
  }
  cveEstadoCumpleReglas(){
    if(this.direccionForm.cveEstado < 0)
      return false;
    return true;
  }
  validarCveMunicipio():void{
    console.log("this.validarCveMunicipio()");
    if(this.cveMunicipioCumpleReglas() === false){
      this.cveMunicipioOk = false;
      this.avisarErrorCveMunicipio = true;
    }
    else{
      this.cveMunicipioOk = true;
      this.avisarErrorCveMunicipio = false;
    }
  }
  cveMunicipioCumpleReglas(){
    if(this.direccionForm.cveMunicipio < 0)
      return false;
    return true;
  }

  valoresFormularioSonInvalidos():boolean{
    console.log("valoresFormularioSonInvalidos()")
    if(this.calleCumpleReglas() === false)
        return true;
    if(this.numeroExtCumpleReglas() === false)
       return true;
    if(this.coloniaCumpleReglas() === false)
      return true;
    if(this.cpCumpleReglas() === false)
      return true;
    if(this.cveEstadoCumpleReglas() === false)
      return true;
    if(this.cveMunicipioCumpleReglas() === false)
      return true;
    return false;

  }
  prenderApagarExplicacion(){
    if(this.explicacionOn)
      this.explicacionOn = false;
    else
      this.explicacionOn = true;
  }
  prenderApagarDepuracion(){
    if(this.depuracionOn)
      this.depuracionOn = false;
    else
      this.depuracionOn = true;
  }
}
