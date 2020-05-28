import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators'
import { RegTelefono } from './reg-telefono';

@Injectable({
  providedIn: 'root'
})
export class DatosTelService {
telefonos:RegTelefono[];


  constructor() { 
    this.telefonos = [
      new RegTelefono("1122334455","2233445566"),
      new RegTelefono("1111122222","3333344444"),
      new RegTelefono("5599123456","7722123456")
    ];
  }
  leerTelefono(id:number):Observable<RegTelefono>{
    if (id > this.telefonos.length)
      return of(null);
    let i:number = id - 1;
    return of(this.telefonos[i]);
  }
  yaExisteTel(tel:string):Observable<boolean>{
    let nOcurr = this.telefonos.filter( (v)=> v.tel1 === tel || v.tel2 === tel).length;

    let respuesta:Observable<boolean> = nOcurr === 0 ? of(false) : of(true);
    return respuesta.pipe( delay(2500) ); // Se retrasará artificialmente la respuesta
  }
  agregarTelefono(tel1:string,tel2:string):Observable<number>{
      this.telefonos.push(new RegTelefono(tel1,tel2));
      return of(this.telefonos.length);
  }
}
