import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DrakeEditPage } from './drake-edit.page';

describe('DrakeEditPage', () => {
  let component: DrakeEditPage;
  let fixture: ComponentFixture<DrakeEditPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DrakeEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
