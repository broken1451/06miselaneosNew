import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgSwitchComponent } from './ng-switch.component';

const routes: Routes = [
  {
    path: '', component: NgSwitchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgSwitchRoutingModule { }
