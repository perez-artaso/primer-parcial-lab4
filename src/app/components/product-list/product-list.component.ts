import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: any[] = [];
  @Output('onProductEmition') productEmitter: EventEmitter<any> = new EventEmitter(); 

  constructor(private firestore: FirestoreService) { }

  ngOnInit(): void {
    this.firestore.getCollection('products').subscribe(
      (productArray) => {
        this.products = productArray as any;
      } 
    )
  }

  emitProduct(product: any) {
    this.productEmitter.emit(product);
  }

}
