import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoticiaListPage } from './noticia-list.page';

describe('NoticiaListPage', () => {
  let component: NoticiaListPage;
  let fixture: ComponentFixture<NoticiaListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NoticiaListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
