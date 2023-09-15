import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  // categoryName: string = 'watch';

  constructor() { }

  //products for Flash Deal section
  products: Product[] = [
    new Product(
      '1',
      'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'Lorem1 ipsum dolor, sit amet consectetur adipisicing elit. Itaque laudantium illum facere harum cumque dolor laboriosam, atque amet iste expedita!',
      'watch',
      3.8,
      5000,
      7113,
      7.3,
      'Titan'
    ),
    new Product(
      '2',
      'https://cdn.pixabay.com/photo/2013/07/12/18/39/smartphone-153650_640.png',
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque laudantium illum facere harum cumque dolor laboriosam, atque amet iste expedita!',
      'mobile',
      4.0,
      5000,
      7000,
      10,
      'Apple'
    ),
    new Product(
      '3',
      'https://cdn.pixabay.com/photo/2015/08/10/20/17/handbag-883122_640.jpg',
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque laudantium illum facere harum cumque dolor laboriosam, atque amet iste expedita!',
      'bag',
      3.3,
      1000,
      14000,
      15,
      'Fostelo'
    ),
    new Product(
      '4',
      'https://cdn.pixabay.com/photo/2013/07/13/12/17/headphone-159569_640.png',
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque laudantium illum facere harum cumque dolor laboriosam, atque amet iste expedita!',
      'headphone',
      4.5,
      10000,
      8000,
      3,
      'boat'
    ),
    new Product(
      '5',
      'https://images.unsplash.com/photo-1545289414-1c3cb1c06238?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHNob2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque laudantium illum facere harum cumque dolor laboriosam, atque amet iste expedita!',
      'shoe',
      4.3,
      2000,
      6000,
      10,
      'nike'
    ),
    new Product(
      '6',
      'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque laudantium illum facere harum cumque dolor laboriosam, atque amet iste expedita!',
      'watch',
      3.9,
      7000,
      10000,
      10,
      'catio'
    ),
  ];

  // get category name
  // getCategoryName(): string {
  //   return this.categoryName;
  // }

  // get all products belong to a categoy group
  getCategoryProducts(categoryName: string): Product[] {
    let categoryProducts: Product[] = [];
    this.products.forEach((product) => {
      if(product.productType === categoryName) categoryProducts.push(product);
    });
    return categoryProducts;
  }

  // get brands for a single category
  getBrands(categoryName: string): string[] {
    let brands: string[] = [];
    let filteredProducts = this.getCategoryProducts(categoryName);
    filteredProducts.forEach((product) => {
      brands.push(product.brand);
    });
    return brands;
  }

  getProductById(productId: string): Product {
    let product: Product = {} as Product;
    this.products.forEach((item) => {
      if(productId === item.productId) product = item;
    });
    return product;
  }
}
