import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteresponsableComponent } from './compteresponsable.component';

describe('CompteresponsableComponent', () => {
  let component: CompteresponsableComponent;
  let fixture: ComponentFixture<CompteresponsableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompteresponsableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteresponsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
