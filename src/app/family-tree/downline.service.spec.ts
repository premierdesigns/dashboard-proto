/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DownlineService } from './downline.service';

describe('Service: Downline', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DownlineService]
    });
  });

  it('should ...', inject([DownlineService], (service: DownlineService) => {
    expect(service).toBeTruthy();
  }));
});
