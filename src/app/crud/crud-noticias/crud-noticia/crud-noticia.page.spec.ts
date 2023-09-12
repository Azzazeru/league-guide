import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudNoticiaPage } from './crud-noticia.page';

describe('CrudNoticiaPage', () => {
  let component: CrudNoticiaPage;
  let fixture: ComponentFixture<CrudNoticiaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CrudNoticiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
