import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CampeonAllPage } from './campeon-all.page';

describe('CampeonAllPage', () => {
  let component: CampeonAllPage;
  let fixture: ComponentFixture<CampeonAllPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CampeonAllPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
