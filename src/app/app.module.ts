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

@NgModule({
  declarations: [
    AppComponent,
    FormTemplDriven01Component,
    FormTemplDriven02Component,
    ReactiveForm01Component,
    ReactiveForm02Component,
    ReactiveForm03Component,
    ReactiveForm04Component,
    ReactiveForm05ValidComponent
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
