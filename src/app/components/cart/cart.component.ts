import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.model';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  productCountInCart: number = 0;
  itemCount: number = 1;
  userId: string = '';

  cartItems: Product[] = [];

  constructor(
    private cartService: CartService,
    private homeService: HomeService
  ) {}

  ngOnInit(): void {
    this.productCountInCart = this.cartService.productCount;
    this.userId = this.homeService.getUserId();

    this.cartItems = this.cartService.getProductsInCart(this.userId);
  }

  // increase a cart item count by 1
  increaseItemCountByOne(productId: string) {
    this.cartService.addCartProductInMap(productId, this.userId);
  }

  // decrease a cart item count by 1
  decreaseItemCountByOne(productId: string) {
    this.cartService.removeCartProductInMap(productId, this.userId);
  }

  getItemCount(productId: string) {
    return this.cartService.getProductCountInCartById(productId);
  }
}
