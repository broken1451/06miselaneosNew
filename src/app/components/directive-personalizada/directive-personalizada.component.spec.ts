import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivePersonalizadaComponent } from './directive-personalizada.component';

describe('DirectivePersonalizadaComponent', () => {
  let component: DirectivePersonalizadaComponent;
  let fixture: ComponentFixture<DirectivePersonalizadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DirectivePersonalizadaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DirectivePersonalizadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
