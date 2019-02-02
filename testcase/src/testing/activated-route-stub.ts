export { ActivatedRoute, Router, RouterLink, RouterOutlet} from '@angular/router';
import { convertToParamMap, ParamMap, Params, NavigationExtras } from "@angular/router";
import { ReplaySubject } from "rxjs";
import { Injectable } from '@angular/core';


/**
 * An ActivateRoute test double with a `paramMap` observable.
 * Use the `setParamMap()` method to add the next `paramMap` value.
 */
export class ActivatedRouteStub {
  // Use a ReplaySubject to share previous values with subscribers
  // and pump new values into the `paramMap` observable
  private subject = new ReplaySubject<ParamMap>();

  constructor(initialParams?: Params) {
    this.setParamMap(initialParams);
  }

  /** The mock paramMap observable */
  readonly paramMap = this.subject.asObservable();

  /** Set the paramMap observables's next value */
  setParamMap(params?: Params) {
    this.subject.next(convertToParamMap(params));
  }
}

@Injectable()
export class RouterStub {
  navigate(commands: any[], extras?: NavigationExtras) {}
}