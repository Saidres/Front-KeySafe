/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditTarjetasComponent } from './edit-tarjetas.component';

describe('EditTarjetasComponent', () => {
  let component: EditTarjetasComponent;
  let fixture: ComponentFixture<EditTarjetasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTarjetasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTarjetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
