/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ElementosService } from './elementos.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Elementos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers: [ElementosService]
    });
  });

  it('should ...', inject([ElementosService], (service: ElementosService) => {
    expect(service).toBeTruthy();
  }));
});
