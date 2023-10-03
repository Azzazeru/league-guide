import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoticiaAllPage } from './noticia-all.page';

describe('NoticiaAllPage', () => {
  let component: NoticiaAllPage;
  let fixture: ComponentFixture<NoticiaAllPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NoticiaAllPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
