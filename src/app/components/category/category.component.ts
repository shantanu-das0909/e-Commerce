import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  categoryName: string = '';
  brands: string[] = ['brand1', 'brand2', 'brand3', 'brand4', 'brand5'];
  filteredBrand: string[] = [];

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryName = this.categoryService.categoryName;
  }

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
}
