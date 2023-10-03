import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudAgregarCampeonPage } from './crud-agregar-campeon.page';

describe('CrudAgregarCampeonPage', () => {
  let component: CrudAgregarCampeonPage;
  let fixture: ComponentFixture<CrudAgregarCampeonPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CrudAgregarCampeonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
