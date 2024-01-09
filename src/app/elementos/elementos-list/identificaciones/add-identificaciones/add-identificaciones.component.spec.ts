/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddIdentificacionesComponent } from './add-identificaciones.component';

describe('AddIdentificacionesComponent', () => {
  let component: AddIdentificacionesComponent;
  let fixture: ComponentFixture<AddIdentificacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddIdentificacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddIdentificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
