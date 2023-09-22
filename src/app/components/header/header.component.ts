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
import { Router } from '@angular/router';

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
    private homeService: HomeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.searchableProducts = [
      'headphone',
      'bag',
      'bottle',
      'mobile',
      'mangoe',
      'shoe',
      'furniture',
      'watch',
    ];
    this.filteredSerachedProducts = this.searchableProducts;
    this.searchProduct();
  }

  // after hit enter or click any one searched item from menu it will go to that category
  getProductsWithSearchedProductName() {
    console.log(this.selectedSearchedProduct);
    this.onBlur();
    this.router.navigate(['/search', this.selectedSearchedProduct]);
  }

  // after clicking any searched item from menu it sets the selectedSearchedItem name 
  setSearchedProduct(productName: string) {
    this.selectedSearchedProduct = productName;
    this.showSearchedProducts = false;
    this.getProductsWithSearchedProductName();
  }

  // to get the filtered list of all item with the same name typed in the search bar 
  filterProduct(productName: string) {
    return this.searchableProducts.filter((product) =>
      product.includes(productName)
    );
  }

  // it declair an event for 'keyup' and get the typed name from search bar
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
