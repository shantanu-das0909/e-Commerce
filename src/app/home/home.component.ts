import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';

interface discountImages{
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images: discountImages[] = [];
  selectedImageIndex: number = 0;
  slideInterval = 3000;
  autoSlider: boolean = true;

  constructor(private homeService: HomeService){

  }
  ngOnInit(): void {
    this.images = this.homeService.getDeiscountCarouselData();
    if(this.autoSlider) {
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
    if(this.selectedImageIndex === 0) {
      this.selectedImageIndex = this.images.length-1;
    }
    else {
      this.selectedImageIndex--;
    }
  }

  //move to next image
  onNextClick(): void {
    if(this.selectedImageIndex === this.images.length-1) {
      this.selectedImageIndex = 0;
    }
    else {
      this.selectedImageIndex++;
    }
  }
}
