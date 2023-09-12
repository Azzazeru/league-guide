import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudActualizarNoticiaPage } from './crud-actualizar-noticia.page';

describe('CrudActualizarNoticiaPage', () => {
  let component: CrudActualizarNoticiaPage;
  let fixture: ComponentFixture<CrudActualizarNoticiaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CrudActualizarNoticiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
