import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllUsuarioPage } from './all-usuario.page';

describe('AllUsuarioPage', () => {
  let component: AllUsuarioPage;
  let fixture: ComponentFixture<AllUsuarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AllUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
