import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFormPlanComponent } from './modal-form-plan.component';

describe('ModalFormPlanComponent', () => {
  let component: ModalFormPlanComponent;
  let fixture: ComponentFixture<ModalFormPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalFormPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalFormPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
