import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModoListPage } from './modo-list.page';

describe('ModoListPage', () => {
  let component: ModoListPage;
  let fixture: ComponentFixture<ModoListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModoListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
