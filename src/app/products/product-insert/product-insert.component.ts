import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-insert',
  templateUrl: './product-insert.component.html',
  styleUrl: './product-insert.component.css',
})
export class ProductInsertComponent {

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  onSubmit(newProduct: Product) {
    this
      .productService
      .insertProduct(newProduct)
      .subscribe(
        product => {
          console.log('Product was saved on server with id: ' + product.id);
          this.productService.clearCache();
          this.router.navigateByUrl('/products');
        }
      )
  }

}
