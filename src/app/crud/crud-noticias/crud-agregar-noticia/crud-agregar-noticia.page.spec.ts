import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudAgregarNoticiaPage } from './crud-agregar-noticia.page';

describe('CrudAgregarNoticiaPage', () => {
  let component: CrudAgregarNoticiaPage;
  let fixture: ComponentFixture<CrudAgregarNoticiaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CrudAgregarNoticiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
