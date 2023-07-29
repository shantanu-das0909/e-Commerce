import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor() {}

  // discount section data
  firstShoppingDiscountsData = [
    {
      imageSrc:
        'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      imageAlt: 'watch',
      productType: 'watch',
      discountHeader: '20% Off For Your First Shopping',
      discountDesc:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque laudantium illum facere harum cumque dolor laboriosam, atque amet iste expedita!',
    },
    {
      imageSrc:
        'https://cdn.pixabay.com/photo/2013/07/12/18/39/smartphone-153650_640.png',
      imageAlt: 'mobile',
      productType: 'mobile',
      discountHeader: '20% Off For Your First Shopping',
      discountDesc:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque laudantium illum facere harum cumque dolor laboriosam, atque amet iste expedita!',
    },
    {
      imageSrc:
        'https://cdn.pixabay.com/photo/2015/08/10/20/17/handbag-883122_640.jpg',
      imageAlt: 'bag',
      productType: 'bag',
      discountHeader: '20% Off For Your First Shopping',
      discountDesc:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque laudantium illum facere harum cumque dolor laboriosam, atque amet iste expedita!',
    },
    {
      imageSrc:
        'https://cdn.pixabay.com/photo/2013/07/13/12/17/headphone-159569_640.png',
      imageAlt: 'headphone',
      productType: 'headphone',
      discountHeader: '20% Off For Your First Shopping',
      discountDesc:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque laudantium illum facere harum cumque dolor laboriosam, atque amet iste expedita!',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1545289414-1c3cb1c06238?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHNob2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      imageAlt: 'shoe',
      productType: 'shoe',
      discountHeader: '20% Off For Your First Shopping',
      discountDesc:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque laudantium illum facere harum cumque dolor laboriosam, atque amet iste expedita!',
    },
    {
      imageSrc:
        'https://cdn.pixabay.com/photo/2017/11/04/22/14/gift-2919003_640.png',
      imageAlt: 'gift',
      productType: 'gift',
      discountHeader: '20% Off For Your First Shopping',
      discountDesc:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque laudantium illum facere harum cumque dolor laboriosam, atque amet iste expedita!',
    },
  ];

  //returning discount section data
  getDeiscountCarouselData() {
    return this.firstShoppingDiscountsData;
  }
}
