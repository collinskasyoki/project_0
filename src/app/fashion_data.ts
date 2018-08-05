export interface Category {
  id: number;
  name: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  stock: number;
  price: number;
  userId: string;
  categoryId: string;
  image: string;
}

export interface User {
  id: string;
  name: string;
  username: string;
  isadmin: number;
  email: string;
  contact: string;
  location: string;
  image: string;
  active: number;
}

export interface CategoryProduct extends Category {
  products: Product[];
}

export interface ProductCategoryUser extends Product {
  category:   Category;
  user:       User;
}
