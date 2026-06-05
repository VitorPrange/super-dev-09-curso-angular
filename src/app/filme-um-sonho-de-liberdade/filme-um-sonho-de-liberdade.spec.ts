import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmeUmSonhoDeLiberdade } from './filme-um-sonho-de-liberdade';

describe('FilmeUmSonhoDeLiberdade', () => {
  let component: FilmeUmSonhoDeLiberdade;
  let fixture: ComponentFixture<FilmeUmSonhoDeLiberdade>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmeUmSonhoDeLiberdade],
    }).compileComponents();

    fixture = TestBed.createComponent(FilmeUmSonhoDeLiberdade);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
