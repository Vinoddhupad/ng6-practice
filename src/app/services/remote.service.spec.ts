import {TestBed, inject} from '@angular/core/testing';

import {RemoteService} from './remote.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('RemoteService', () => {
  let service: RemoteService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RemoteService]
    });

    // inject service using Testbed
    service = TestBed.get(RemoteService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the json', () => {

    service.fetchViaHttp().subscribe(data => {
      expect(data.name).toBe('Juri');
    });

    const req = httpMock.expectOne('/someendpoint/people.json', 'call to api');
    expect(req.request.method).toBe('GET');
    req.flush({
      name: 'Juri'
    });
  });
});
