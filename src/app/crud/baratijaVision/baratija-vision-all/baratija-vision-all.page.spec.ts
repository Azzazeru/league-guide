import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BaratijaVisionAllPage } from './baratija-vision-all.page';

describe('BaratijaVisionAllPage', () => {
  let component: BaratijaVisionAllPage;
  let fixture: ComponentFixture<BaratijaVisionAllPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BaratijaVisionAllPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
