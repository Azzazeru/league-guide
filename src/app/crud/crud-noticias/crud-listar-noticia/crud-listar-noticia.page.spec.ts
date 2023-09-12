import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudListarNoticiaPage } from './crud-listar-noticia.page';

describe('CrudListarNoticiaPage', () => {
  let component: CrudListarNoticiaPage;
  let fixture: ComponentFixture<CrudListarNoticiaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CrudListarNoticiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
