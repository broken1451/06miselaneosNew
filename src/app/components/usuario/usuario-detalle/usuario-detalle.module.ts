import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioDetalleRoutingModule } from './usuario-detalle-routing.module';
import { UsuarioDetalleComponent } from './usuario-detalle.component';


@NgModule({
  declarations: [
    UsuarioDetalleComponent
  ],
  imports: [
    CommonModule,
    UsuarioDetalleRoutingModule
  ]
})
export class UsuarioDetalleModule { }
