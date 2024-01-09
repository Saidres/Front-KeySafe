/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FavoritasService } from './favoritas.service';

describe('Service: Favoritas', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FavoritasService]
    });
  });

  it('should ...', inject([FavoritasService], (service: FavoritasService) => {
    expect(service).toBeTruthy();
  }));
});
