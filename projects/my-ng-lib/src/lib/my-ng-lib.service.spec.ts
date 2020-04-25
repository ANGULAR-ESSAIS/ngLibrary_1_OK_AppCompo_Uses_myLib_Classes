import { TestBed } from '@angular/core/testing';

import { MyNgLibService } from './my-ng-lib.service';

describe('MyNgLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyNgLibService = TestBed.get(MyNgLibService);
    expect(service).toBeTruthy();
  });
});
