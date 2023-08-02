import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  searchItem: string = '';

  constructor(private cartService: CartService, private homeService: HomeService) {}
  ngOnInit(): void {
  }
  
  onSubmit() {
    // console.log(this.searchItem);
    // this.cartCount += 1;
  }

  getCartCount() {
    return this.cartService.getProductsInCart(this.homeService.getUserId()).length;
  }

}