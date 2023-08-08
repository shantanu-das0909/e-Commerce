import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { CategoryService } from 'src/app/services/category.service';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  categoryName: string = '';
  userId: string = '';

  selectedImageIndex: number = 0;
  addToCartAlertMessage: string = '';
  isAddToCartAlertMessageSuccess: boolean = false;
  addedItemIndex: number = -1;
  minFilterPrice: number = 1000;
  maxFilterPrice: number = 30000;

  brands: string[] = [];
  filteredBrand: string[] = [];

  constructor(
    private categoryService: CategoryService,
    private homeService: HomeService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.categoryName = this.categoryService.getCategoryName();
    this.userId = this.homeService.getUserId();
    this.brands = this.categoryService.getBrands();
  }

  //get checkbox values from form in template
  getCheckBoxValue(event: any): void {
    let brand = event.target.value;
    if (this.filteredBrand.includes(brand)) {
      this.filteredBrand.splice(this.filteredBrand.indexOf(brand), 1);
    } else {
      this.filteredBrand.push(brand);
    }
  }

  clear() {
    this.filteredBrand.splice(0, this.filteredBrand.length);
  }

  // apply filter
  getFilterProducts(): Product[] {
    let allProducts = this.categoryService.getCategoryProducts();
    let finalFilteredProducts: Product[] = [];

    // applied price filter
    let productsAfterAppliedPriceFilter = allProducts.filter(
      (product) =>
        this.getDiscountedPrice(product.actualPrice, product.discount) >=
          this.minFilterPrice &&
        this.getDiscountedPrice(product.actualPrice, product.discount) <=
          this.maxFilterPrice
    );

    // applied brand filter
    if(this.filteredBrand.length != 0) {
      finalFilteredProducts = productsAfterAppliedPriceFilter.filter(
        (product) =>
          this.filteredBrand.includes(product.brand)
      );
    } else {
      finalFilteredProducts = [...productsAfterAppliedPriceFilter];
    }
    return finalFilteredProducts;
  }

  //show success message
  showSuccessMessage(message: string, index: number): void {
    this.isAddToCartAlertMessageSuccess = true;
    this.addToCartAlertMessage = message;
    this.addedItemIndex = index;
    setTimeout(() => {
      this.addToCartAlertMessage = '';
      this.isAddToCartAlertMessageSuccess = false;
      this.addedItemIndex = -1;
    }, 2000);
  }

  //get discounted price
  getDiscountedPrice(actualPrice: number, discount: number): number {
    let discountedPrice = actualPrice * (1 - discount / 100);
    return Math.round(discountedPrice);
  }

  //add to cart
  addToCart(productId: string, index: number) {
    // call add to cart service function
    let product = this.categoryService.getProductById(productId);
    this.cartService.addProduct(product, this.userId);
    //show success message
    let successAlertMessage = 'Added to Cart Successfully !';
    this.showSuccessMessage(successAlertMessage, index);
  }
}
