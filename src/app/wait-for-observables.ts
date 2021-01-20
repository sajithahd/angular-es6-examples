import { Component, OnDestroy } from "@angular/core";
import {
  concat,
  forkJoin,
  interval,
  merge,
  Observable,
  of,
  Subscription,
  timer
} from "rxjs";
import { map, take, flatMap } from "rxjs/operators";

@Component({
  selector: "wait-for-observables",
  template: `
    <div>
      Multiple observables:
      <button (click)="mulitpleObservables()">Multiple observables</button>
      <br />
    </div>

    <div>
      Concat wait for all observables:
      <button (click)="concat()">Concat</button>
      <br />
    </div>

    <div>
      Merge and wait for all observables:
      <button (click)="merge()">Merge</button>
      <br />
    </div>

    <div>
      ForkJoin and wait for all observables:
      <button (click)="forkJoin()">Fork Join</button>
      <br />
    </div>

    <div>
      Flat Map and wait for all observables:
      <button (click)="flatMap()">Flat Map</button>
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
      //.pipe(map(v => v))
      .pipe(take(4));

    this.observable2 = timer(1000, 1000)
    //  .pipe(map(v => v))
      .pipe(take(3));

    // this.mulitpleObservables();
    // this.merge();
  }
  
  mulitpleObservables() {
    this.subscription = this.observable1.subscribe(v => console.log(v));
    this.subscription2 = this.observable2.subscribe(v => console.log(v));
  }

  concat() {
    concat(this.observable1, this.observable2).subscribe(res =>
      console.log(res)
    );
  }

  merge() {
    merge(this.observable1, this.observable2).subscribe(res =>
      console.log(res)
    );
  }

  forkJoin() {
    forkJoin(this.observable1, this.observable2).subscribe(res =>
      console.log(res)
    );
  }

  flatMap() {
    this.observable1 // or of(10)
      .pipe(
        flatMap(op1 => {
          return of(op1 + 10);
        })
      )
      .subscribe(res => console.log(res));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.subscription2.unsubscribe();
  }
}
