import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudActualizarCampeonPage } from './crud-actualizar-campeon.page';

describe('CrudActualizarCampeonPage', () => {
  let component: CrudActualizarCampeonPage;
  let fixture: ComponentFixture<CrudActualizarCampeonPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CrudActualizarCampeonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
