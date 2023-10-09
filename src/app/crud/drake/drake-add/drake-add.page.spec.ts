import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DrakeAddPage } from './drake-add.page';

describe('DrakeAddPage', () => {
  let component: DrakeAddPage;
  let fixture: ComponentFixture<DrakeAddPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DrakeAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
