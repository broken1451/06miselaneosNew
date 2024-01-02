import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgStyleRoutingModule } from './ng-style-routing.module';
import { NgStyleComponent } from './ng-style.component';


@NgModule({
  declarations: [
    NgStyleComponent
  ],
  imports: [
    CommonModule,
    NgStyleRoutingModule
  ]
})
export class NgStyleModule { }
