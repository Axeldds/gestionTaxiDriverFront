import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteadministrateurComponent } from './compteadministrateur.component';

describe('CompteadministrateurComponent', () => {
  let component: CompteadministrateurComponent;
  let fixture: ComponentFixture<CompteadministrateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompteadministrateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteadministrateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
