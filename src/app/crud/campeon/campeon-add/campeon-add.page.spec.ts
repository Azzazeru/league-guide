import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CampeonAddPage } from './campeon-add.page';

describe('CampeonAddPage', () => {
  let component: CampeonAddPage;
  let fixture: ComponentFixture<CampeonAddPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CampeonAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
