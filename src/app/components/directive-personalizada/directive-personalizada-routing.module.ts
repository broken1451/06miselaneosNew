import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivePersonalizadaComponent } from './directive-personalizada.component';

const routes: Routes = [
  {
    path:'', component: DirectivePersonalizadaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectivePersonalizadaRoutingModule { }
