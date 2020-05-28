import { Component, OnInit } from '@angular/core';
import { Direccion } from '../entidades/direccion';
import { NgForm} from '@angular/forms'

@Component({
  selector: 'app-form-templ-driven03',
  templateUrl: './form-templ-driven03.component.html',
  styleUrls: ['./form-templ-driven03.component.css']
})
export class FormTemplDriven03Component implements OnInit {

  //Encender o apagar para monitorear comportamiento del formulario
  depuracionOn:boolean=false;
  //Encender o apagar para que salga una explicación del demo en la vista
  explicacionOn:boolean = false;

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
    console.log("ngOnInit()");
  }
  renovarPublicacionDir(){
    this.direccionForm = this.crearDireccionVacia();
  }
  crearDireccionVacia():Direccion{
    return new Direccion('','','','','',0,0);
  }
  insertarDireccion(formulario:NgForm){
    this.direcciones.push(this.direccionForm);
    this.direccionForm =this.crearDireccionVacia();
    formulario.resetForm();
    setTimeout(x => this.direccionForm = this.crearDireccionVacia(),0);
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
