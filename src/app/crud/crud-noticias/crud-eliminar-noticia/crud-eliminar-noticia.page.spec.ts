import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudEliminarNoticiaPage } from './crud-eliminar-noticia.page';

describe('CrudEliminarNoticiaPage', () => {
  let component: CrudEliminarNoticiaPage;
  let fixture: ComponentFixture<CrudEliminarNoticiaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CrudEliminarNoticiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
