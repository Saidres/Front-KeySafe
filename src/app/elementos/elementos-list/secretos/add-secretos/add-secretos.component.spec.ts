import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSecretosComponent } from './add-secretos.component';

describe('AddSecretosComponent', () => {
  let component: AddSecretosComponent;
  let fixture: ComponentFixture<AddSecretosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSecretosComponent]
    });
    fixture = TestBed.createComponent(AddSecretosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
