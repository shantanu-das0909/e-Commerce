import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { HomeService } from '../services/home.service';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product.model';
import { AppComponent } from '../app.component';

interface firstShoppingDiscountsData {
  imageSrc: string;
  imageAlt: string;
  productType: string;
  discountHeader: string;
  discountDesc: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  userId: string = '1';
  firstShoppingDiscountsData: firstShoppingDiscountsData[] = [];
  flashDealProducts: Product[] = [];
  selectedImageIndex: number = 0;
  slideInterval = 3000;
  autoSlider: boolean = true;
  addToCartAlertMessage: string = '';
  isAddToCartAlertMessageSuccess: boolean = false;
  addedItemIndex: number = -1;

  constructor(
    private homeService: HomeService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.firstShoppingDiscountsData =
      this.homeService.getDeiscountCarouselData();
    this.flashDealProducts = this.homeService.getFlashDealProducts();
    if (this.autoSlider) {
      this.autoSlideImages();
    }
  }

  // set index of image on dot click
  selectImage(i: number) {
    this.selectedImageIndex = i;
  }

  // auto slide image
  autoSlideImages(): void {
    setInterval(() => {
      this.onNextClick();
    }, this.slideInterval);
  }

  //move to prev image
  onPrevClick(): void {
    if (this.selectedImageIndex === 0) {
      this.selectedImageIndex = this.firstShoppingDiscountsData.length - 1;
    } else {
      this.selectedImageIndex--;
    }
  }

  //move to next image
  onNextClick(): void {
    if (
      this.selectedImageIndex ===
      this.firstShoppingDiscountsData.length - 1
    ) {
      this.selectedImageIndex = 0;
    } else {
      this.selectedImageIndex++;
    }
  }

  // Flash Deals Prev and Next button function
  @ViewChild('flashDealsCardContainer', { static: true })
  flashDealsCardContainer: ElementRef = {} as ElementRef;
  onNextFlashClick() {
    let cardContainer = this.flashDealsCardContainer.nativeElement.children[0];
    let flashDealCards = cardContainer.getElementsByClassName('card');
    cardContainer.append(flashDealCards[0]);
  }

  onPrevFlashClick() {
    let cardContainer = this.flashDealsCardContainer.nativeElement.children[0];
    let flashDealCards = cardContainer.getElementsByClassName('card');
    cardContainer.prepend(flashDealCards[flashDealCards.length - 1]);
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
    let discountedPrice = actualPrice* (1 - (discount / 100));
    return Math.round(discountedPrice);
  }

  //add to cart
  addToCart(productId: string, index: number) {
    // call add to cart service function
    let product = this.homeService.getFlashDealProductById(productId);
    this.cartService.addProduct(product, this.userId);
    //show success message
    let successAlertMessage = 'Added to Cart Successfully !';
    this.showSuccessMessage(successAlertMessage, index);
  }
}
