import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivePersonalizadaRoutingModule } from './directive-personalizada-routing.module';
import { DirectiveCustomDirective } from './directive-custom.directive';
import { DirectivePersonalizadaComponent } from './directive-personalizada.component';

@NgModule({
  declarations: [
    DirectivePersonalizadaComponent,
    DirectiveCustomDirective
  ],
  imports: [
    CommonModule,
    DirectivePersonalizadaRoutingModule
  ],
  exports: [DirectiveCustomDirective]
})
export class DirectivePersonalizadaModule { }
