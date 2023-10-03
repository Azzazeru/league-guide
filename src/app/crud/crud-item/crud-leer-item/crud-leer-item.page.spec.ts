import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudLeerCampeonPage } from './crud-leer-campeon.page';

describe('CrudLeerCampeonPage', () => {
  let component: CrudLeerCampeonPage;
  let fixture: ComponentFixture<CrudLeerCampeonPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CrudLeerCampeonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
