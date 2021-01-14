import { Component, OnDestroy } from "@angular/core";
import { interval, Observable, Subscription, timer } from "rxjs";
import { map, take } from "rxjs/operators";

@Component({
  selector: "wait-for-observables",
  template: `
    <div>
      Wait for all observables
    </div>
  `
})
export class WaitForObservables implements OnDestroy {
  observable1: Observable<any>;
  observable2: Observable<any>;
  subscription: Subscription;
  subscription2: Subscription;

  constructor() {
    this.observable1 = interval(1000)
      .pipe(map(v => v))
      .pipe(take(3));

    this.observable2 = interval(1000)
      .pipe(map(v => v))
      .pipe(take(3));

    this.merge();
  }

  merge() {
    this.subscription = this.observable1.subscribe(v => console.log(v));
    this.subscription2 = this.observable1.subscribe(v => console.log(v));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.subscription2.unsubscribe();
  }
}
