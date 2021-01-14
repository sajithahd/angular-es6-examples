import { Component } from "@angular/core";
import { Observable, timer } from "rxjs";

@Component({
  selector: "wait-for-observables",
  template: `
    <div>
      Wait for all observables
    </div>
  `
})
export class WaitForObservables {
  observable1: Observable<any>;
  observable2: Observable<any>;

  constructor() {
    this.observable1 = timer(1000,20000);
    
    //this.merge();
  }

  merge(){
    this.observable1.subscribe(v=> console.log(v))
  }
  
}