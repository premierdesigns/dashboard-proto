/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { JewelerProfileService } from './jeweler-profile.service';

describe('Service: JewelerProfile', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JewelerProfileService]
    });
  });

  it('should ...', inject([JewelerProfileService], (service: JewelerProfileService) => {
    expect(service).toBeTruthy();
  }));
});
