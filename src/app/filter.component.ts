import { Component, Input } from "@angular/core";

@Component({
  selector: "hello",
  template: `
    <h1>Hello {{ name }}!</h1>

    <div>
      <label>Get filered output</label>
      <br />
      <button (click)="filter('Shirts')">Shirts</button>
      <button (click)="filter('Shoes')">Shoes</button>
    </div>
    <div>
      <span *ngFor="let product of filteredProdcuts">
        {{ product.name }},
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
export class FilterComponent {
  @Input() name: string;

  products: any[] = [
    { name: "Levi's", category: "Shirts" },
    { name: "Nike", category: "Shoes" },
    { name: "Tommy hilfiger", category: "Shirts" },
    { name: "US Polo", category: "Trousers" },
    { name: "Puma", category: "Shoes" },
    { name: "Adidas", category: "Shoes" },
    { name: "Louis", category: "Trousers" }
  ];

  filteredProdcuts: any[] = [];

  filter(category: string) {
    // 1.
    this.products.filter(pro => {
      if (pro.category === category) {
        this.filteredProdcuts.push(pro);
      } else {
        // some other array
      }
    });

    // 2.
    this.filteredProdcuts = this.products.filter(pro => {
      return pro.category === category;
    });

    // 3.
    this.filteredProdcuts = this.products.filter(
      prodcut => prodcut.category === category
    );

    // this.filteredProdcuts[0] = this.products.find(pro => {
    //   return pro.category === category;
    // });
  }
}
