import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DrakeListPage } from './drake-list.page';

describe('DrakeListPage', () => {
  let component: DrakeListPage;
  let fixture: ComponentFixture<DrakeListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DrakeListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
