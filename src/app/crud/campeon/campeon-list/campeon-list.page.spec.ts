import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CampeonListPage } from './campeon-list.page';

describe('CampeonListPage', () => {
  let component: CampeonListPage;
  let fixture: ComponentFixture<CampeonListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CampeonListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
