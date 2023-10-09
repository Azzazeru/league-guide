import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HechizoAddPage } from './hechizo-add.page';

describe('HechizoAddPage', () => {
  let component: HechizoAddPage;
  let fixture: ComponentFixture<HechizoAddPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HechizoAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
