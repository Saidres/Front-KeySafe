/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FavoritasListarComponent } from './favoritas-listar.component';

describe('FavoritasListarComponent', () => {
  let component: FavoritasListarComponent;
  let fixture: ComponentFixture<FavoritasListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritasListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritasListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
