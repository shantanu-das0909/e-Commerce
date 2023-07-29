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


  // @ViewChild('testRefernce', {static: true}) testRefernce = {} as ElementRef;
  // test() {
  //   // console.log(this.testRefernce.nativeElement);
  //   let childElm = this.testRefernce.nativeElement.children[0];
  //   let items = childElm.getElementsByClassName("test-item");
  //   childElm.append(items[0]);
  // }
}
