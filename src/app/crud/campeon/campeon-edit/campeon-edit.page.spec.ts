import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CampeonEditPage } from './campeon-edit.page';

describe('CampeonEditPage', () => {
  let component: CampeonEditPage;
  let fixture: ComponentFixture<CampeonEditPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CampeonEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
