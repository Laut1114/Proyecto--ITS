import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFormCarreraComponent } from './modal-form-carrera.component';

describe('ModalFormCarreraComponent', () => {
  let component: ModalFormCarreraComponent;
  let fixture: ComponentFixture<ModalFormCarreraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalFormCarreraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFormCarreraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
