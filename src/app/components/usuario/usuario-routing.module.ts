import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './usuario.component';

const routes: Routes = [
  {
    path: '', component: UsuarioComponent,
    children: [
      {
        path: 'nuevo', loadChildren: () => import('./usuario-nuevo/usuario-nuevo.module').then(m => m.UsuarioNuevoModule), data: { titulo: 'Nuevo Usuario' }
      },
      {
        path: 'editar', loadChildren: () => import('./usuario-editar/usuario-editar.module').then(m => m.UsuarioEditarModule), data: { titulo: 'Editar usuario' }
      },
      {
        path: 'detalle', loadChildren: () => import('./usuario-detalle/usuario-detalle.module').then(m => m.UsuarioDetalleModule), data: { titulo: 'Detalle usuario' }
      },
      {
        path: '**', redirectTo: 'nuevo'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
