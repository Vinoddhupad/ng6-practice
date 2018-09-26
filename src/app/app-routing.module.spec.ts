import { Location } from '@angular/common';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { appRoutes } from './app-routing.module';
import {AppModule} from './app.module';


describe('The App Routing', () => {
  let router: Router;
  let location: Location;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, RouterTestingModule.withRoutes(appRoutes)]
    });

    // router = TestBed.get(Router) as Router;
    // location = TestBed.get(Location) as Location;

    router = TestBed.get(Router);
    location = TestBed.get(Location);
  });

  it(
    'automatically redirects to name-editor when the app starts',
    fakeAsync(() => {
      router.navigate(['/']);
      tick();
      expect(location.path()).toBe('/name-editor');
    }));

  it(
    'automatically redirects to profile-editor when invoking /profile-editor',
    fakeAsync(() => {
      router.navigate(['/profile-editor']);
      tick();
      expect(location.path()).toBe('/profile-editor');
    })
  );
});

