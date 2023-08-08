import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { TopCategoryProduct } from '../models/TopCategoryProduct.model';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  
  userId: string = '1';
  
  constructor() {}

  getUserId(): string {
    return this.userId;
    // return '1';
  }

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
      7.3,
      'Titan'
    ),
    new Product(
      '2',
      'https://cdn.pixabay.com/photo/2013/07/12/18/39/smartphone-153650_640.png',
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque laudantium illum facere harum cumque dolor laboriosam, atque amet iste expedita!',
      'mobile',
      4.0,
      5000,
      7000,
      10,
      'Apple'
    ),
    new Product(
      '3',
      'https://cdn.pixabay.com/photo/2015/08/10/20/17/handbag-883122_640.jpg',
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque laudantium illum facere harum cumque dolor laboriosam, atque amet iste expedita!',
      'bag',
      3.3,
      1000,
      14000,
      15,
      'Fostelo'
    ),
    new Product(
      '4',
      'https://cdn.pixabay.com/photo/2013/07/13/12/17/headphone-159569_640.png',
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque laudantium illum facere harum cumque dolor laboriosam, atque amet iste expedita!',
      'headphone',
      4.5,
      10000,
      8000,
      3,
      'boat'
    ),
    new Product(
      '5',
      'https://images.unsplash.com/photo-1545289414-1c3cb1c06238?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHNob2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque laudantium illum facere harum cumque dolor laboriosam, atque amet iste expedita!',
      'shoe',
      4.3,
      2000,
      6000,
      10,
      'nike'
    ),
    new Product(
      '6',
      'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque laudantium illum facere harum cumque dolor laboriosam, atque amet iste expedita!',
      'watch',
      3.9,
      7000,
      10000,
      10,
      'catio'
    ),
  ];

  //top category section data
  topCategoryData: TopCategoryProduct[] = [
    new TopCategoryProduct('headphone', '3k', {
      image1URL:
        'https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aGVhZHBob25lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      image2URL:
        'https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHBob25lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      image3URL:
        'https://plus.unsplash.com/premium_photo-1680346528789-0ffcc13f5ebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGVhZHBob25lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    }),
    new TopCategoryProduct('watch', '1k', {
      image1URL:
        'https://images.unsplash.com/photo-1617043983671-adaadcaa2460?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNtYXJ0JTIwd2F0Y2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      image2URL:
        'https://images.unsplash.com/photo-1517502474097-f9b30659dadb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNtYXJ0JTIwd2F0Y2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      image3URL:
        'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    }),
    new TopCategoryProduct('sunglass', '5k', {
      image1URL:
        'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3VuZ2xhc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      image2URL:
        'https://images.unsplash.com/photo-1589642380614-4a8c2147b857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHN1bmdsYXNzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      image3URL:
        'https://images.unsplash.com/photo-1625591342274-013866180475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3VuZ2xhc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    }),
    new TopCategoryProduct('bag', '2k', {
      image1URL:
        'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFnfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      image2URL:
        'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFnfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      image3URL:
        'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmFnfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60z',
    }),
    new TopCategoryProduct('book', '6k', {
      image1URL:
        'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      image2URL:
        'https://cdn.pixabay.com/photo/2017/03/02/05/14/bible-2110439_640.jpg',
      image3URL:
        'https://images.unsplash.com/photo-1593340010859-83edd3d6d13f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fGJvb2t8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    }),
    new TopCategoryProduct('furniture', '1k', {
      image1URL:
        'https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnVybml0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      image2URL:
        'https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      image3URL:
        'https://images.unsplash.com/photo-1611967164521-abae8fba4668?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    }),
  ];

  //returning discount section data
  getDeiscountCarouselData() {
    return this.firstShoppingDiscountsData;
  }

  // get all Flash Deal Product
  getFlashDealProducts(): Product[] {
    return this.flashDealProducts;
  }

  // find Flash deal product by ID
  getFlashDealProductById(id: string): Product {
    let item: Product = {} as Product;
    for (let product of this.flashDealProducts) {
      if (product.productId === id) item = product;
    }
    return item;
  }

  // to get top category data
  getTopCategoryData(): TopCategoryProduct[] {
    return this.topCategoryData;
  }
}
