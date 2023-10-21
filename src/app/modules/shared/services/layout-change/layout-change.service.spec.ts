import { TestBed } from '@angular/core/testing';

import { LayoutChangeService } from './layout-change.service';

describe('LayoutChangeService', () => {
  let service: LayoutChangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LayoutChangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
