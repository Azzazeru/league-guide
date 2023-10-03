import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoticiaEditPage } from './noticia-edit.page';

describe('NoticiaEditPage', () => {
  let component: NoticiaEditPage;
  let fixture: ComponentFixture<NoticiaEditPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NoticiaEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
