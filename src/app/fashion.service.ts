import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { Category } from './category';
import { Category, CategoryProduct, Product, ProductCategoryUser, User } from './fashion_data';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FashionService {

  fashion_url = 'http://localhost:8888/api/';

  constructor(private http: HttpClient) { }

  // Categories
  getCategories (limit: number = 0, page: number = 0): Observable<Category[]> {
    if (limit === 0 || page === 0) {
      return this.http.get<Category[]> (this.fashion_url + 'categories')
        .pipe(
          retry(3),
          catchError(this.errorHandler)
          );
    }
  }

  getCategory (categoryId: number): Observable<Category> {
    return this.http.get<Category> (this.fashion_url + 'categories/' + categoryId)
      .pipe(
        catchError(this.errorHandler)
        );
  }

  getCategoryProducts (categoryId): Observable<CategoryProduct> {
    return this.http.get<CategoryProduct> (this.fashion_url + 'categories/' + categoryId + '/products')
      .pipe(
        catchError(this.errorHandler)
        );
  }

  addCategory () {
    //
  }

  updateCategory () {
    //
  }

  deleteCategory () {
    // Delete all products of this category
    // Delete category
  }


  // Products
  getProducts (): Observable<Product[]> {
    return this.http.get<Product[]>(
        this.fashion_url + 'products'
      )
      .pipe(
        catchError(this.errorHandler)
        );
  }

  getProduct (productId): Observable<ProductCategoryUser> {
    return this.http.get<ProductCategoryUser>(
      this.fashion_url + 'products/' + productId
      )
      .pipe(
        catchError(this.errorHandler)
        );
  }

  addProduct () {
    //
  }

  updateProduct () {
    //
  }

  deleteProduct () {
    //
  }


  // Users
  getUsers () {
    //
  }

  getUser (userId) {
    //
  }

  getUserProducts (userId, categoryId = 'none') {
    //
  }

  addUser () {
    //
  }

  updateUser () {
    //
  }

  deleteUser () {
    // Delete products owned by user
    // Delete user
  }

  private errorHandler (error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Client-side or network error
      console.error('An Error occured:', error.error.message);
    } else {
      // backend returned unsuccessful response code
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`
        );
    }

    // return observable with a user-facing error message
    return throwError( 'Something bad happened. Please try again later.');
  }
}
