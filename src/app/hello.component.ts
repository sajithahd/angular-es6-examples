import { Component, Input } from "@angular/core";

@Component({
  selector: "hello",
  template: `
    <h1>Hello {{ name }}!</h1>

    <div>
      <label>Get filered output</label>
      <br />
      <button (click)="filter()">Filter by category</button>
    </div>
    <div>
      <span *ngFor="let product of filteredProdcuts">
        {{product.name}}
      </span>
    </div>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent {
  @Input() name: string;

  products: any[] = [
    { name: "Levi's", category: "Shirts" },
    { name: "Nike", role: "Shoes" },
    { name: "Tommy hilfiger", role: "Shirts" },
    { name: "US Polo", role: "Trousers" },
    { name: "Puma", role: "Shoes" },
    { name: "Adidas", role: "Shoes" },
    { name: "Louis", role: "Trousers" }
  ];
  filteredProdcuts: any[] = [];

  filter() {
    this.filteredProdcuts.push( { name: "Louis", role: "Trousers" });
  }
}
