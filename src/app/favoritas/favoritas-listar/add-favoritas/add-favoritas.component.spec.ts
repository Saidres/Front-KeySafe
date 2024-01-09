/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddFavoritasComponent } from './add-favoritas.component';

describe('AddFavoritasComponent', () => {
  let component: AddFavoritasComponent;
  let fixture: ComponentFixture<AddFavoritasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFavoritasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFavoritasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
