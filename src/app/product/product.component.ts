import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FashionService } from '../fashion.service';
import { ProductCategoryUser } from '../fashion_data';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public product: ProductCategoryUser;
  productId: number;
  error;

  constructor(private fashionService: FashionService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.productId = params.id);
  }

  ngOnInit() {
    this.getProduct(this.productId);
  }

  getProduct (productId): void {
    this.fashionService.getProduct(productId)
    .subscribe(
      product => this.product = product,
      error => this.error = error
      );
  }

}
