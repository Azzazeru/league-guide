import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MonstruoJgAddPage } from './monstruo-jg-add.page';

describe('MonstruoJgAddPage', () => {
  let component: MonstruoJgAddPage;
  let fixture: ComponentFixture<MonstruoJgAddPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MonstruoJgAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
