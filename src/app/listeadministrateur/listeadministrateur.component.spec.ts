import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeadministrateurComponent } from './listeadministrateur.component';

describe('ListeadministrateurComponent', () => {
  let component: ListeadministrateurComponent;
  let fixture: ComponentFixture<ListeadministrateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeadministrateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeadministrateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
