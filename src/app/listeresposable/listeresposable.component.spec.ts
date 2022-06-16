import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeresposableComponent } from './listeresposable.component';

describe('ListeresposableComponent', () => {
  let component: ListeresposableComponent;
  let fixture: ComponentFixture<ListeresposableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeresposableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeresposableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
