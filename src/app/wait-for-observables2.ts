import { Component } from "@angular/core";
import {
  concat,
  forkJoin,
  fromEvent,
  interval,
  merge,
  observable,
  Observable,
  of,
  Subscription,
  timer,
  zip
} from "rxjs";
import {
  buffer,
  flatMap,
  groupBy,
  mergeMap,
  reduce,
  take
} from "rxjs/operators";

@Component({
  selector: "wait-for-obs-2",
  template: `
    <span>Multiple Observables </span>
    <button (click)="multiple()">Multiple</button>

    <br />
    <span>Concat Observables</span>
    <button (click)="concat()">Concat</button>

    <br />
    <span>Merge Observables</span>
    <button (click)="merge()">Merge</button>

    <br />
    <span>ForkJoin Observables</span>
    <button (click)="forkjoin()">Fork Join</button>

    <br />
    <span>Zip Observables</span>
    <button (click)="zip()">Zip</button>

    <br />
    <span>Flat Map Observables</span>
    <button (click)="flatMap()">Flat Map</button>

    <br />
    <span>Group Observables</span>
    <button (click)="group()">Group</button>
  `
})
export class WaitForObservables2 {
  observable: Observable<number>;
  observable2: Observable<number>;
  subscription: Subscription;
  subscirption2: Subscription;

  observables: Observable<string>[];

  constructor() {
    this.observable = timer(1000, 1000).pipe(take(3));
    this.observable2 = timer(1000, 1000).pipe(take(3));

    this.observables = [of("hi"), of("sajitha"), of("welcom")];

    // const clicks = fromEvent(document, "click");
    // const intervalEvents = interval(1000);
    // const buffered = intervalEvents.pipe(buffer(clicks));
    // buffered.subscribe(x => console.log(x));
  }

  multiple() {
    this.observable.subscribe(v => console.log(v));
    this.observable2.subscribe(v => console.log(v));
  }

  concat() {
    concat(this.observable2, this.observable).subscribe(v => console.log(v));
  }

  merge() {
    merge(this.observable2, this.observable).subscribe(v => console.log(v));
  }

  forkjoin() {
    forkJoin(this.observable2, this.observable).subscribe(v => console.log(v));

    forkJoin(this.observables).subscribe(v => console.log(v));
  }

  zip() {
    zip(this.observable, this.observable2).subscribe(v => console.log(v));
  }

  flatMap() {
    of("sajitha")
      .pipe(flatMap(v => of("hi " + v)))
      .subscribe(v2 => console.log(v2));

    // this.observable2
    //   .pipe(flatMap(v => this.observable))
    //   .subscribe(vaa => console.log(vaa));
  }

  group() {
    of(
      { id: 1, name: "JavaScript" },
      { id: 2, name: "Parcel" },
      { id: 2, name: "webpack" },
      { id: 1, name: "TypeScript" },
      { id: 3, name: "TSLint" }
    )
      .pipe(
        groupBy(p => p.id),
        mergeMap(group$ => group$.pipe(reduce((acc, cur) => [...acc, cur], [])))
      )
      .subscribe(p => console.log(p));
  }
}
