import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BaratijaVisionDetailPage } from './baratija-vision-detail.page';

describe('BaratijaVisionDetailPage', () => {
  let component: BaratijaVisionDetailPage;
  let fixture: ComponentFixture<BaratijaVisionDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BaratijaVisionDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
