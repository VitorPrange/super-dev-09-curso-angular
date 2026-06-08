import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteExercicios } from './componente-exercicios';

describe('ComponenteExercicios', () => {
  let component: ComponenteExercicios;
  let fixture: ComponentFixture<ComponenteExercicios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteExercicios],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponenteExercicios);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
