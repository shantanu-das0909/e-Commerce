import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{


  productCountInCart: number = 0;

  constructor(private cartService: CartService) {}
  
  ngOnInit(): void {
    this.productCountInCart = this.cartService.productCount;
  }


}
