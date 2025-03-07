import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UniversidadPage } from './universidad.page';

describe('UniversidadPage', () => {
  let component: UniversidadPage;
  let fixture: ComponentFixture<UniversidadPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversidadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
