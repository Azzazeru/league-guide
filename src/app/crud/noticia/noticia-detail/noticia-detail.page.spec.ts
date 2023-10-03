import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoticiaDetailPage } from './noticia-detail.page';

describe('NoticiaDetailPage', () => {
  let component: NoticiaDetailPage;
  let fixture: ComponentFixture<NoticiaDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NoticiaDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
