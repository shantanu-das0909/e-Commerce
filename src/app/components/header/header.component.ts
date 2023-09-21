import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { HomeService } from '../../services/home.service';
import {
  debounceTime,
  distinctUntilChanged,
  fromEvent,
  map,
  of,
  switchMap,
  tap,
} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  showUserMenu: boolean = false;
  showSearchedProducts: boolean = false;
  filteredSerachedProducts: string[] = [];
  selectedSearchedProduct: string = '';

  @ViewChild('searchBarInput', { static: true }) searchBarInput: ElementRef =
    {} as ElementRef;
  searchableProducts: string[] = [];

  constructor(
    private cartService: CartService,
    private homeService: HomeService
  ) {}

  ngOnInit(): void {
    this.searchableProducts = [
      'headphone',
      'bags',
      'bottles',
      'mobiles',
      'mangoes',
      'shoes',
      'furnitures',
      'headphone set',
    ];
    this.filteredSerachedProducts = this.searchableProducts;
    this.searchProduct();
  }

  getProductsWithSearchedProductName() {
    console.log(this.selectedSearchedProduct);
  }

  setSearchedProduct(productName: string) {
    this.selectedSearchedProduct = productName;
    this.showSearchedProducts = false;
    this.getProductsWithSearchedProductName();
  }

  filterProduct(productName: string) {
    return this.searchableProducts.filter((product) =>
      product.includes(productName)
    );
  }

  searchProduct() {
    const search$ = fromEvent(this.searchBarInput.nativeElement, 'keyup').pipe(
      map((event: any) => event.target.value),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((productName) =>
        productName
          ? of<any>(this.filterProduct(productName))
          : of<any>(this.searchableProducts)
      ),
      tap(() => (this.showSearchedProducts = true))
    );

    search$.subscribe((searchedProducts) => {
      this.filteredSerachedProducts = searchedProducts;
      // console.log(`subscribe ${this.filteredSerachedProducts}`);
    });
  }

  onMouseOver() {
    this.showUserMenu = true;
  }

  closeUserMenu() {
    this.showUserMenu = false;
  }

  onFocus(productName: string) {
    this.showSearchedProducts = true;
    this.filteredSerachedProducts = this.filterProduct(productName);
    // console.log(`Focus ${this.filteredSerachedProducts}`);
  }

  onBlur() {
    setTimeout(() => {
      this.showSearchedProducts = false;
    }, 100);
  }

  getCartCount() {
    return this.cartService.getProductsInCart(this.homeService.getUserId())
      .length;
  }
}
