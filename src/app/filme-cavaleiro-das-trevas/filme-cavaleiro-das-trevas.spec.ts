import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmeCavaleiroDasTrevas } from './filme-cavaleiro-das-trevas';

describe('FilmeCavaleiroDasTrevas', () => {
  let component: FilmeCavaleiroDasTrevas;
  let fixture: ComponentFixture<FilmeCavaleiroDasTrevas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmeCavaleiroDasTrevas],
    }).compileComponents();

    fixture = TestBed.createComponent(FilmeCavaleiroDasTrevas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
