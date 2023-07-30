import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HomeService } from '../services/home.service';

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
  firstShoppingDiscountsData: firstShoppingDiscountsData[] = [];
  selectedImageIndex: number = 0;
  slideInterval = 3000;
  autoSlider: boolean = true;
  addToCartAlertMessage: string = "";
  isAddToCartAlertMessageSuccess:boolean = false;
  addedItemIndex: number = -1;

  constructor(private homeService: HomeService) {}
  ngOnInit(): void {
    this.firstShoppingDiscountsData = this.homeService.getDeiscountCarouselData();
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
    if (this.selectedImageIndex === this.firstShoppingDiscountsData.length - 1) {
      this.selectedImageIndex = 0;
    } else {
      this.selectedImageIndex++;
    }
  }

  // Flash Deals Prev and Next button function
  @ViewChild('flashDealsCardContainer', {static: true}) flashDealsCardContainer:ElementRef = {} as ElementRef;
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
  showSuccessMessage(message: string, index:number): void {
    this.isAddToCartAlertMessageSuccess = true;
    this.addToCartAlertMessage = message;
    this.addedItemIndex = index;
    console.log(message);
    setTimeout(() => {
      this.addToCartAlertMessage = "";
      this.isAddToCartAlertMessageSuccess = false;
      this.addedItemIndex = -1;
      console.log("Exited");
    }, 2000);
  }


  //add to cart
  addToCart(productId: string, index: number) {
    // call add to cart service function

    //show success message
    let successAlertMessage = "Added to Cart Successfully !"
    
    this.showSuccessMessage(successAlertMessage, index);
  }
}
