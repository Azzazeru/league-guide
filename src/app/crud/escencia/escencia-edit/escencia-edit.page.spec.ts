import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EscenciaEditPage } from './escencia-edit.page';

describe('EscenciaEditPage', () => {
  let component: EscenciaEditPage;
  let fixture: ComponentFixture<EscenciaEditPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EscenciaEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
