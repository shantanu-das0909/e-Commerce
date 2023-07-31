import { AfterContentChecked, AfterContentInit, AfterViewChecked, Component, OnInit } from '@angular/core';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterContentChecked, OnInit {
  title = 'e-commerce-frontend';

  searchItem: string = '';
  cartCount: number = 0;

  constructor(private cartService: CartService) {}
  ngOnInit(): void {
    this.cartCount = this.cartService.productCount;
  }
  
  ngAfterContentChecked(): void {
    this.cartCount = this.cartService.productCount;
  }

  onSubmit() {
    // console.log(this.searchItem);
    // this.cartCount += 1;
  }
}
