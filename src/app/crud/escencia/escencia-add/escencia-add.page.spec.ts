import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EscenciaAddPage } from './escencia-add.page';

describe('EscenciaAddPage', () => {
  let component: EscenciaAddPage;
  let fixture: ComponentFixture<EscenciaAddPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EscenciaAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
