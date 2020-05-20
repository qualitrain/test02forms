import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mostrarEjemplo01:boolean=false;
  mostrarEjemplo02:boolean=true;
  title = 'test02Forms';

  activarDesactivarEjemplo01(){
    if(this.mostrarEjemplo01)
      this.mostrarEjemplo01 = false;
    else
      this.mostrarEjemplo01 = true;
  }
  activarDesactivarEjemplo02(){
    if(this.mostrarEjemplo02)
      this.mostrarEjemplo02 = false;
    else
      this.mostrarEjemplo02 = true;
  }

}
