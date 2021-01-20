import { Component } from "@angular/core";
import {
  concat,
  forkJoin,
  merge,
  observable,
  Observable,
  of,
  Subscription,
  timer
} from "rxjs";
import { take } from "rxjs/operators";

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
  `
})
export class WaitForObservables2 {
  observable: Observable<number>;
  observable2: Observable<number>;
  subscription: Subscription;
  subscirption2: Subscription;

  observables: Observable<string>[];

  constructor() {
    this.observable = timer(1000, 1000).pipe(take(2));
    this.observable2 = timer(1000, 1000).pipe(take(4));

    this.observables = [of("hi"), of("sajitha"), of("welcom")];
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
    forkJoin(this.observable, this.observable2).subscribe(v => console.log(v));

    forkJoin(this.observables).subscribe(v => console.log(v));
  }
}
