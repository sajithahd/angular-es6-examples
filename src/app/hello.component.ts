import { Component, Input } from "@angular/core";

@Component({
  selector: "hello",
  template: `
    <h1>Hello {{ name }}!</h1>
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
}
