import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BaratijaVisionAddPage } from './baratija-vision-add.page';

describe('BaratijaVisionAddPage', () => {
  let component: BaratijaVisionAddPage;
  let fixture: ComponentFixture<BaratijaVisionAddPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BaratijaVisionAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
