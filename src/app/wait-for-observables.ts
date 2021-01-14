import { Component, OnDestroy } from "@angular/core";
import { concat, interval, Observable, Subscription, timer } from "rxjs";
import { map, take } from "rxjs/operators";

@Component({
  selector: "wait-for-observables",
  template: `
    <div>
      Multiple observables
      <button (click)="(mulitpleObservables)">Multiple observables</button>
      <br />
    </div>

    <div>
      Wait for all observables
      <button (click)="(mulitpleObservables)">Merge All</button>
      <br />
    </div>
  `
})
export class WaitForObservables implements OnDestroy {
  observable1: Observable<number>;
  observable2: Observable<number>;
  subscription: Subscription;
  subscription2: Subscription;

  constructor() {
    this.observable1 = timer(1000, 1000)
      .pipe(map(v => v))
      .pipe(take(3));

    this.observable2 = timer(1000, 1000)
      .pipe(map(v => v))
      .pipe(take(3));

    // this.mulitpleObservables();
    // this.merge();
  }
  mulitpleObservables() {
    this.subscription = this.observable1.subscribe(v => console.log(v));
    this.subscription2 = this.observable2.subscribe(v => console.log(v));
  }

  merge() {
    this.observable1
      .pipe(c => concat(this.observable2))
      .subscribe(res => console.log(res));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.subscription2.unsubscribe();
  }
}
