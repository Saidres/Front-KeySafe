import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementosListComponent } from './elementos-list.component';

describe('ElementosListComponent', () => {
  let component: ElementosListComponent;
  let fixture: ComponentFixture<ElementosListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElementosListComponent]
    });
    fixture = TestBed.createComponent(ElementosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
