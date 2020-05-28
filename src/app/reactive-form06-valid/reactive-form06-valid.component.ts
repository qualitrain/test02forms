import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-reactive-form06-valid',
  templateUrl: './reactive-form06-valid.component.html',
  styleUrls: ['./reactive-form06-valid.component.css']
})
export class ReactiveForm06ValidComponent implements OnInit {
  //Encender o apagar para que salga una explicación del demo en la vista
  explicacionOn:boolean = false;
  //Encender o apagar para monitorear campos de estado
  debugOn:boolean = false;
 
  // objeto de enlace entre el template y el controlador
  formulario:FormGroup;

  //objeto-modelo
  telefonos = {
    tel1:"",
    tel2:""
  }
  //spec del objeto-modelo para el argumento del builder
  specBuildFormulario = {
    tel1:["",[
       Validators.required,
       Validators.pattern(/^[\d]{10}$/),
      ]],
    tel2:["",[
       Validators.pattern(/^[\d]{10}$/),
      ]]
  }
  //Atajos
  get tel1(){
    return this.formulario.get('tel1');
  }
  get tel2(){
    return this.formulario.get('tel2');
  }
  get estadosTel1(){
    return this.getEstadosControl("tel1");
  }
  get estadosTel2(){
    return this.getEstadosControl("tel2");
  }
  getEstadosControl(campo:string):string{
    let ctrlTel1 = this.formulario.get(campo);
    let estados = (ctrlTel1.valid ? 'valid, ':'')
    + (ctrlTel1.invalid ? 'invalid, ':'') 
    + (ctrlTel1.pending ? 'pending, ':'' )
    + (ctrlTel1.pristine ? 'pristine, ':'') 
    + (ctrlTel1.dirty ? 'dirty, ':'') 
    + (ctrlTel1.untouched ? 'untouched, ':'' )
    + (ctrlTel1.touched ? 'touched, ':'' );

    return estados;
  }


  constructor(private fBuilder:FormBuilder) { 
  }

  ngOnInit(): void {
    this.formulario = this.fBuilder.group(this.specBuildFormulario);
    this.formulario.setValidators(this.validadorTelsDistintos);
    this.formulario.updateValueAndValidity();
    this.formulario.setValue(this.telefonos);
  }
  insertarTelefonos(){
    console.log(this.formulario.value);
    this.formulario.reset();
  }
  prenderApagarExplicacion(){
    if(this.explicacionOn)
      this.explicacionOn = false;
    else
      this.explicacionOn = true;
  }

  validadorTelsDistintos(control:FormGroup):ValidationErrors{
    let tel1:string = control.get('tel1').value;
    let tel2:string = control.get('tel2').value;
    if(tel1 === tel2){ 
      return {telefonosIguales:true};     
    }
    return null;
  }

}
