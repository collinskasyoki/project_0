import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Product } from '../fashion_data';
import { FashionService } from '../fashion.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products: Product[];
  error;

  constructor(private fashionService: FashionService,
              private router: Router,
              private route: ActivatedRoute
              ) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts (): void {
    this.fashionService.getProducts()
      .subscribe(
        products => this.products = products,
        error => this.error = error
        );
  }

  goToProduct (product: Product): void {
    this.router.navigate([product.id], {relativeTo: this.route});
  }

}
