import { Component, OnInit, DoCheck } from '@angular/core';
import { Direccion } from '../entidades/direccion';

@Component({
  selector: 'app-form-templ-driven02',
  templateUrl: './form-templ-driven02.component.html',
  styleUrls: ['./form-templ-driven02.component.css']
})
export class FormTemplDriven02Component implements OnInit {

  //Encender o apagar para monitorear comportamiento del formulario
  depuracionOn:boolean=true;

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
  constructor() { 
    this.direccionForm = this.crearDireccionVacia();
  }

  ngOnInit(): void {
  }
  renovarPublicacionDir(){
    this.direccionForm = this.crearDireccionVacia();
  }
  crearDireccionVacia():Direccion{
    return new Direccion('','','','','',0,0);
  }
  insertarDireccion(){
    this.direcciones.push(this.direccionForm);
    this.direccionForm =this.crearDireccionVacia();
  }

}
