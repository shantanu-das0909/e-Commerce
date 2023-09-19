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
  // itemCount: number = 1;
  isOrderPlaced = false;
  orderPlacedMessage: string = '';

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

  getItemCountByItemId(productId: string) {
    return this.cartService.getProductCountInCartById(productId);
  }

  // get total amount for all the cart items
  getTotalPrice(): number {
    let totalPrice = 0;
    this.cartItems.forEach((item) => {
      totalPrice +=
        item.actualPrice * this.getItemCountByItemId(item.productId);
    });
    return totalPrice;
  }

  // get total discounted amount for all cart items
  getTotalDiscountedPrice() {
    let totalDiscountedPrice = 0;
    this.cartItems.forEach((item) => {
      let discount =
        item.actualPrice *
        (item.discount / 100) *
        this.getItemCountByItemId(item.productId);
      totalDiscountedPrice += discount;
    });
    return Math.round(totalDiscountedPrice);
  }

  //get total amount to be paid for all cart items after discount
  getTotalAmountToBePaid() {
    return this.getTotalPrice() - this.getTotalDiscountedPrice();
  }

  //get discount amount for a single product in cart
  getDiscountAmount(actualPrice: number, discount: number): number {
    return Math.round(actualPrice * (1 - discount / 100));
  }

  // remove a item from cart
  removeItemFromCart(productId: string) {
    this.cartService.removeProductFromCart(productId);
    this.cartItems = this.cartService.getProductsInCart(this.userId);
  }

  //place order
  placeOrder() {
    this.isOrderPlaced = true;
    this.orderPlacedMessage = 'Your order is placed successfully !';
    setTimeout(() => {
      this.isOrderPlaced = false;
      this.orderPlacedMessage = '';
      this.cartService.clearCart();
    }, 2000);
  }

  // get dummy delivery date after 7 days
  getDeliveryDate() {
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const deliveryDays = 7;

    const now = new Date();
    now.setDate(now.getDate() + deliveryDays);

    let date = now.getDate();
    let month = now.getMonth();
    let day = now.getDay();

    let deliveryDate = days[day - 1] + ' ' + monthNames[month - 1] + ' ' + date;
    return deliveryDate;
  }
}
