import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './components.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'ngStyle', pathMatch: 'full'
  },
  {
    path:'ngStyle', loadChildren: () => import('./ng-style/ng-style.module').then(m => m.NgStyleModule)
  },
  {
    path:'css', loadChildren: () => import('./css/css.module').then(m => m.CssModule)
  },
  {
    path:'ngclass', loadChildren: () => import('./ngclass/ngclass.module').then(m => m.NgclassModule)
  },
  {
    path: 'directive-custom', loadChildren: () => import('./directive-personalizada/directive-personalizada.module').then(m => m.DirectivePersonalizadaModule)
  },
  {
    path: 'ngSwitch', loadChildren: () => import('./ng-switch/ng-switch.module').then(m => m.NgSwitchModule)
  },
  {
    path: 'usuario/:id', loadChildren: () => import('./usuario/usuario.module').then(m => m.UsuarioModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
