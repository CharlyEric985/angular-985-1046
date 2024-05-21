import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMatiereComponent } from './form-matiere.component';

describe('FormMatiereComponent', () => {
  let component: FormMatiereComponent;
  let fixture: ComponentFixture<FormMatiereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormMatiereComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormMatiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
