import { Directive } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appValidTelsEq]',
  providers: [{provide: NG_VALIDATORS, useExisting: ValidTelsEqDirective, multi: true}]
})
export class ValidTelsEqDirective implements Validator{

  constructor() { }
  validate(control: AbstractControl): ValidationErrors {
    return this.validadorTelsDistintos(control as FormGroup);
  }

  validadorTelsDistintos(control:FormGroup):ValidationErrors{
    if(!control)
      return null;
    if(!control.get('tel1'))
      return null;
    if(!control.get('tel2'))
      return null;
    let tel1:string = control.get('tel1').value;
    let tel2:string = control.get('tel2').value;
    if(tel1 === tel2){ 
      return {telefonosIguales:true};     
    }
    return null;
  }

}
