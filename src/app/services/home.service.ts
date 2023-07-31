import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

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

  //products for Flash Deal section
  flashDealProducts: Product[] = [
    new Product(
      '1',
      'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'Lorem1 ipsum dolor, sit amet consectetur adipisicing elit. Itaque laudantium illum facere harum cumque dolor laboriosam, atque amet iste expedita!',
      'watch',
      3.8,
      5000,
      7113,
      7.3
    ),
    new Product(
      '2',
      'https://cdn.pixabay.com/photo/2013/07/12/18/39/smartphone-153650_640.png',
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque laudantium illum facere harum cumque dolor laboriosam, atque amet iste expedita!',
      'watch',
      4.0,
      5000,
      7000,
      10
    ),
    new Product(
      '3',
      'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque laudantium illum facere harum cumque dolor laboriosam, atque amet iste expedita!',
      'watch',
      3.3,
      1000,
      14000,
      15
    ),
    new Product(
      '4',
      'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque laudantium illum facere harum cumque dolor laboriosam, atque amet iste expedita!',
      'watch',
      4.5,
      10000,
      8000,
      3
    ),
    new Product(
      '5',
      'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque laudantium illum facere harum cumque dolor laboriosam, atque amet iste expedita!',
      'watch',
      4.3,
      2000,
      3000,
      11
    ),
    new Product(
      '6',
      'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque laudantium illum facere harum cumque dolor laboriosam, atque amet iste expedita!',
      'watch',
      3.9,
      7000,
      10000,
      10
    )
  ];

  //returning discount section data
  getDeiscountCarouselData() {
    return this.firstShoppingDiscountsData;
  }

  getFlashDealProducts() {
    return this.flashDealProducts;
  }

  getFlashDealProductById(id: string): Product {
    let item: Product = {} as Product;
    for(let product of this.flashDealProducts) {
      if(product.productId === id) item = product;
    }
    return item;
  }
}
