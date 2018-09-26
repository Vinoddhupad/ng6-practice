import {TestBed, inject, tick, fakeAsync} from '@angular/core/testing';

import {AsyncService} from './async.service';

describe('AsyncService', () => {
  let service: AsyncService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AsyncService]
    });

    service = TestBed.get(AsyncService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should handle simple async scenario', () => {
    service.simpleAync().then(result => {
      expect(result).toBe('Hi there');
    });
  });

  it('should handle fake async', fakeAsync(() => {
    let value: any;
    service.simpleAync().then(result => {
      value = result;
    });
    expect(value).not.toBeDefined();
    tick(50);
    expect(value).not.toBeDefined();
    tick(50);
    expect(value).toBeDefined();
  }));
});
