import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'e-commerce-frontend';

  searchItem: string = "";
  cartCount: number = 0;

  onSubmit() {
    console.log(this.searchItem);
    this.cartCount += 1;
  }
}
