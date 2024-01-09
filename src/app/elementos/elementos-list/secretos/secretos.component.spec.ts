import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretosComponent } from './SecretosComponent';

describe('SecretosComponent', () => {
  let component: SecretosComponent;
  let fixture: ComponentFixture<SecretosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecretosComponent]
    });
    fixture = TestBed.createComponent(SecretosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
