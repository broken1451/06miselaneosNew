import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioDetalleComponent } from './usuario-detalle.component';

const routes: Routes = [
  {
    path: '', component: UsuarioDetalleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioDetalleRoutingModule { }
