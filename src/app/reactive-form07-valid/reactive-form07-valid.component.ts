import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidationErrors, AbstractControl } from '@angular/forms';
import { DatosTelService } from '../datos-tel.service';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-reactive-form07-valid',
  templateUrl: './reactive-form07-valid.component.html',
  styleUrls: ['./reactive-form07-valid.component.css']
})
export class ReactiveForm07ValidComponent implements OnInit {

  constructor(private fBuilder:FormBuilder, 
              private provDatos:DatosTelService) { 
  }
  //Encender o apagar para que salga una explicación del demo en la vista
  explicacionOn:boolean = true;
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
       Validators.pattern(/^[\d]{10}$/)
      ]],
    tel2:["",[
       Validators.pattern(/^[\d]{10}$/)
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

  ngOnInit(): void {
    this.formulario = this.fBuilder.group(this.specBuildFormulario, { updateOn: "blur" });

    //Es necesario hacer un llamado a una fucnión que devuelve la función de validación para
    // poder crear un contexto en el que la función tenga acceso por cerradura a la fuente de datos
    this.tel1.setAsyncValidators(this.getFuncionValidacionAsincrona(this.provDatos));
    this.tel2.setAsyncValidators(this.getFuncionValidacionAsincrona(this.provDatos));
    this.tel1.updateValueAndValidity();
    this.tel2.updateValueAndValidity();

    this.formulario.setValidators(this.validadorTelsDistintos);
    this.formulario.updateValueAndValidity();

    this.formulario.setValue(this.telefonos, );
  }
  insertarTelefonos(){
    console.log(this.formulario.value);

    let obsLLave:Observable<number> = this.provDatos.agregarTelefono(this.tel1.value, this.tel2.value);
    obsLLave.subscribe( llave=> console.log("Teléfonos agregados con la llave " + llave));

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

  getFuncionValidacionAsincrona(servDatos:DatosTelService){
    return (control: AbstractControl): Promise<ValidationErrors> | Observable<ValidationErrors> =>{
      let resultValidacion:Observable<boolean> = servDatos.yaExisteTel(control.value);
      return resultValidacion.pipe(
        map(yaExiste => yaExiste ? { telYaExiste:true } : null),
        catchError( ()=> of(null))
      );
    }
  }

  //La siguiente función es la misma que la que está anidada en la anterior. Se ha mantenido para
  //facilitar su entendimiento
  validarSiYaExisteTel(control: AbstractControl): Promise<ValidationErrors> | Observable<ValidationErrors> {
     let resultValidacion:Observable<boolean> = this.provDatos.yaExisteTel(control.value);
     return resultValidacion.pipe(
      map(yaExiste => yaExiste ? { telYaExiste:true } : null),
      catchError( ()=> of(null))
     );
  }

}
