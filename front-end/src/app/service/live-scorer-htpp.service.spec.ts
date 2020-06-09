import { TestBed } from '@angular/core/testing';

import { LiveScorerHtppService } from './live-scorer-htpp.service';

describe('LiveScorerHtppService', () => {
  let service: LiveScorerHtppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LiveScorerHtppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
