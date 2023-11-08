import { Component, inject } from '@angular/core';
import { Product } from 'src/app/models/product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  title: string = 'Products'
  products: Product[]
  selectedProduct: Product;
  private productService = inject(ProductService);

  onSelect(product: Product) {
    this.selectedProduct = product;
  }

  constructor() {
    this.products = this.productService.getProducts();
  }

}
