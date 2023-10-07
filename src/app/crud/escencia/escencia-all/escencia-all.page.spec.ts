import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EscenciaAllPage } from './escencia-all.page';

describe('EscenciaAllPage', () => {
  let component: EscenciaAllPage;
  let fixture: ComponentFixture<EscenciaAllPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EscenciaAllPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
