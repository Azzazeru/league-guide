import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DrakeDetailPage } from './drake-detail.page';

describe('DrakeDetailPage', () => {
  let component: DrakeDetailPage;
  let fixture: ComponentFixture<DrakeDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DrakeDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
