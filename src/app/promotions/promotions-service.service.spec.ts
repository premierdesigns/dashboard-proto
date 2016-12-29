/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PromotionsServiceService } from './promotions-service.service';

describe('Service: PromotionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PromotionsServiceService]
    });
  });

  it('should ...', inject([PromotionsServiceService], (service: PromotionsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
