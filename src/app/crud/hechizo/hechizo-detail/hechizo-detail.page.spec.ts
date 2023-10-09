import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HechizoDetailPage } from './hechizo-detail.page';

describe('HechizoDetailPage', () => {
  let component: HechizoDetailPage;
  let fixture: ComponentFixture<HechizoDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HechizoDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
