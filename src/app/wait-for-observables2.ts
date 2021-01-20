import { Component } from "@angular/core";
import { concat, observable, Observable, Subscription, timer } from "rxjs";
import { take } from "rxjs/operators";

@Component({
  selector: "wait-for-obs-2",
  template: `
    <span>Multiple Observables </span>
    <button (click)="multiple()">Multiple</button>

    <br />
    <span>Concat Observables</span>
    <button (click)="concat()">Concat</button>
  `
})
export class WaitForObservables2 {
  observable: Observable<number>;
  observable2: Observable<number>;
  subscription: Subscription;
  subscirption2: Subscription;

  constructor() {
    this.observable = timer(1000, 1000).pipe(take(2));
    this.observable2 = timer(1000, 1000).pipe(take(4));
  }

  multiple() {
    this.observable.subscribe(v => console.log(v));
    this.observable2.subscribe(v => console.log(v));
  }

  concat() {
    concat(this.observable2, this.observable).subscribe(
      v=> console.log(v)
    );
  }
}
