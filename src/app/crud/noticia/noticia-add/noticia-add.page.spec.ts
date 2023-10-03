import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoticiaAddPage } from './noticia-add.page';

describe('NoticiaAddPage', () => {
  let component: NoticiaAddPage;
  let fixture: ComponentFixture<NoticiaAddPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NoticiaAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
