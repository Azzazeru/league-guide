import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BaratijaVisionEditPage } from './baratija-vision-edit.page';

describe('BaratijaVisionEditPage', () => {
  let component: BaratijaVisionEditPage;
  let fixture: ComponentFixture<BaratijaVisionEditPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BaratijaVisionEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
