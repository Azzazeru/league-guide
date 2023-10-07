import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HechizoEditPage } from './hechizo-edit.page';

describe('HechizoEditPage', () => {
  let component: HechizoEditPage;
  let fixture: ComponentFixture<HechizoEditPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HechizoEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
