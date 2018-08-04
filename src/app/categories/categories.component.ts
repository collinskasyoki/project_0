import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { FashionService } from '../fashion.service';
import { Category } from '../fashion_data';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  public categories = [];
  error;

  constructor(private fashionService: FashionService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories (): void {
    this.fashionService.getCategories()
    .subscribe(
      categories => this.categories = categories,
      error => this.error = error
      );
  }

  goToCategory(category): void {
    this.router.navigate([category.id], {relativeTo: this.route});
  }
}
