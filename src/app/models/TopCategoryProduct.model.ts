export class TopCategoryProduct {
  constructor(
    public categoryName: string, 
    public ordersInWeek: string,
    public images: { 
        image1URL: string,
        image2URL: string,
        image3URL: string 
    }
) {}
}
