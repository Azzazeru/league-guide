import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BaratijaVisionListPage } from './baratija-vision-list.page';

describe('BaratijaVisionListPage', () => {
  let component: BaratijaVisionListPage;
  let fixture: ComponentFixture<BaratijaVisionListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BaratijaVisionListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
