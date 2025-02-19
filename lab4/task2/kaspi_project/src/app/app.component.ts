import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ProductsListComponent, RouterOutlet],
  template: `
    <app-header (categorySelected)="changeCategory($event)"></app-header>
    <app-products-list [selectedCategory]="selectedCategory"/>
    <router-outlet/>
  `,
  styles: [],
})
export class AppComponent {
  selectedCategory = 'All';

  changeCategory(category: string) {
    this.selectedCategory = category;
  }
}