import {TestBed, inject} from '@angular/core/testing';

import {GreetingService} from './greeting.service';

describe('GreetingService', () => {
  let service: GreetingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GreetingService]
    });
  });

  beforeEach(
    inject([GreetingService], (s: GreetingService) => {
      service = s;
    }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should greet properly', () => {
    expect(service.sayHi('Vinod')).toEqual('Hi Vinod');
  });
});
