import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  selectedProduct: any = {
    origin: "",
    name: "",
    population: "",
    flags: ""
  };

  constructor() { }

  ngOnInit(): void {
  }

  setSelectedProduct(product: any) {
    this.selectedProduct = product;
    console.dir(product);
  }

}
