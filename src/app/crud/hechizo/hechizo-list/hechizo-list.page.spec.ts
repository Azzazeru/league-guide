import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HechizoListPage } from './hechizo-list.page';

describe('HechizoListPage', () => {
  let component: HechizoListPage;
  let fixture: ComponentFixture<HechizoListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HechizoListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
