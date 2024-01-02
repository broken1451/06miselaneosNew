import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgSwitchRoutingModule } from './ng-switch-routing.module';
import { NgSwitchComponent } from './ng-switch.component';


@NgModule({
  declarations: [
    NgSwitchComponent
  ],
  imports: [
    CommonModule,
    NgSwitchRoutingModule
  ]
})
export class NgSwitchModule { }
