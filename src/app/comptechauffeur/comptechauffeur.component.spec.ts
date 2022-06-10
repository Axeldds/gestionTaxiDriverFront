import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptechauffeurComponent } from './comptechauffeur.component';

describe('ComptechauffeurComponent', () => {
  let component: ComptechauffeurComponent;
  let fixture: ComponentFixture<ComptechauffeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComptechauffeurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComptechauffeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
