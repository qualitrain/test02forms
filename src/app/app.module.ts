import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormTemplDriven01Component } from './form-templ-driven01/form-templ-driven01.component';
import { FormTemplDriven02Component } from './form-templ-driven02/form-templ-driven02.component';
import { ReactiveForm01Component } from './reactive-form01/reactive-form01.component';
import { ReactiveForm02Component } from './reactive-form02/reactive-form02.component';
import { ReactiveForm03Component } from './reactive-form03/reactive-form03.component';
import { ReactiveForm04Component } from './reactive-form04/reactive-form04.component';
import { ReactiveForm05ValidComponent } from './reactive-form05-valid/reactive-form05-valid.component';
import { FormTemplDriven03Component } from './form-templ-driven03/form-templ-driven03.component';
import { ValidContLogicDirective } from './valid-cont-logic.directive';
import { ReactiveForm06ValidComponent } from './reactive-form06-valid/reactive-form06-valid.component';
import { FormTemplDriven04Component } from './form-templ-driven04/form-templ-driven04.component';
import { ValidTelsEqDirective } from './valid-tels-eq.directive';
import { ReactiveForm07ValidComponent } from './reactive-form07-valid/reactive-form07-valid.component';

@NgModule({
  declarations: [
    AppComponent,
    FormTemplDriven01Component,
    FormTemplDriven02Component,
    ReactiveForm01Component,
    ReactiveForm02Component,
    ReactiveForm03Component,
    ReactiveForm04Component,
    ReactiveForm05ValidComponent,
    FormTemplDriven03Component,
    ValidContLogicDirective,
    ReactiveForm06ValidComponent,
    FormTemplDriven04Component,
    ValidTelsEqDirective,
    ReactiveForm07ValidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
