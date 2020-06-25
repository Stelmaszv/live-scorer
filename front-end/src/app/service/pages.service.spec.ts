import { TestBed } from '@angular/core/testing';

import { Pages_Service } from './pages.service';

describe('PagesService', () => {
  let service: Pages_Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Pages_Service);
  });
});
