import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudLeerNoticiaPage } from './crud-leer-noticia.page';

describe('CrudLeerNoticiaPage', () => {
  let component: CrudLeerNoticiaPage;
  let fixture: ComponentFixture<CrudLeerNoticiaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CrudLeerNoticiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
