import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmeInterestelar } from './filme-interestelar';

describe('FilmeInterestelar', () => {
  let component: FilmeInterestelar;
  let fixture: ComponentFixture<FilmeInterestelar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmeInterestelar],
    }).compileComponents();

    fixture = TestBed.createComponent(FilmeInterestelar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
