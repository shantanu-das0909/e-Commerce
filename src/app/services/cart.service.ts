import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  productCount: number = 0;
  productsInCart: Product[] = [];

  productInCartMap = new Map();

  // get products in cart
  getProductsInCart(userId: string) {
    return this.productsInCart;
  }

  //add product to cart
  addProduct(product: Product, userId: string) {
    if(this.getProductCountInCartById(product.productId) === 0){
      this.productsInCart.push(product);
    }
    this.productCount = this.productsInCart.length;

    this.addCartProductInMap(product.productId, userId);
  }

  // add cart products in a map to get individual count
  addCartProductInMap(productId: string, userId: string) {
    let productCountInCart = this.getProductCountInCartById(productId);
    if( productCountInCart != 0) {
      this.productInCartMap.set(productId, productCountInCart + 1);
    }
    else {
      this.productInCartMap.set(productId, 1);
    }
  }

  removeCartProductInMap(productId: string, userId: string) {
    let productCountInCart = this.getProductCountInCartById(productId);
    if( productCountInCart > 1) {
      this.productInCartMap.set(productId, productCountInCart - 1);
    }
  }

  // get a single product count in cart by Id
  getProductCountInCartById(id: string) {
    let productCountInCart = this.productInCartMap.get(id);
    if( productCountInCart != undefined) {
      return productCountInCart;
    }
    else {
      return 0;
    }
  }

  // remove product from cart
  removeProductFromCart(productId: string) {
    for(let i = 0; i < this.productsInCart.length; i++) {
      if(this.productsInCart[i].productId === productId){
        this.productsInCart.splice(i, 1);
      }
    }
  }

}
