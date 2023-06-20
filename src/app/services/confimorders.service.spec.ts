import { TestBed } from '@angular/core/testing';

import { ConfimordersService } from './confimorders.service';

describe('ConfimordersService', () => {
  let service: ConfimordersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfimordersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
