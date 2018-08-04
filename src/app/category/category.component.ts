import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { FashionService } from '../fashion.service';
import { CategoryProduct } from '../fashion_data';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  public category: CategoryProduct;
  categoryId: Object;
  error;

  constructor(private fashionService: FashionService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.categoryId = params.id);
  }

  ngOnInit() {
    this.getCategoryProducts(this.categoryId);
  }

  getCategoryProducts(categoryId): void {
    this.fashionService.getCategoryProducts(categoryId)
    .subscribe(
      category => this.category = category,
      error => this.error = error
      );
  }

}
