import {TestBed} from '@angular/core/testing';

import {RemoteService} from './remote.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {of} from 'rxjs';

describe('MockRemoteService', () => {
  let service: RemoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RemoteService]
    });

    // inject service using Testbed
    service = TestBed.get(RemoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the mocked data in the subscribe', () => {
    const spy = spyOn(service, 'fetchViaHttp').and.returnValue(
      of({
        name: 'Vinod'
      })
    );

    service.fetchViaHttp().subscribe(data => {
      expect(data.name).toBe('Vinod');
    });

    expect(spy).toHaveBeenCalled();
  });

  it('should not invoke the error throwing function since we mocked it', () => {
    const emptyFn = () => {
    };
    const spy = spyOn(service, 'throwingError').and.returnValue(emptyFn);
    service.throwingError();
    expect(spy).toHaveBeenCalled();
  });

});
