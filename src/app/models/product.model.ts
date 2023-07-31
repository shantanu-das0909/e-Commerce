
export class Product {
    constructor(
        public productId: string,
        public productImageURL: string,
        public productDescription: string,
        public productType: string,
        public productRating: number,
        public peopleOrdered: number,
        public actualPrice: number,
        public discount: number,
    ) {}
}