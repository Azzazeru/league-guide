import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DrakeAllPage } from './drake-all.page';

describe('DrakeAllPage', () => {
  let component: DrakeAllPage;
  let fixture: ComponentFixture<DrakeAllPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DrakeAllPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
