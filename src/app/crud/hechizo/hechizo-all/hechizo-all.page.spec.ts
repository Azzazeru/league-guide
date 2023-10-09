import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HechizoAllPage } from './hechizo-all.page';

describe('HechizoAllPage', () => {
  let component: HechizoAllPage;
  let fixture: ComponentFixture<HechizoAllPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HechizoAllPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
