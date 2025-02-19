import { Component, input, output } from '@angular/core';
import { Product } from '../products-list.component';

@Component({
  selector: 'app-product-card',
  imports: [],
  template: `
    <div class="bg-white shadow-md border rounded-xl p-6 flex flex-col gap-4 relative">
      <div class="mx-auto">
        <img [src]="product().image" class="w-[200px] h-[100px] object-contain" />
      </div>
      <div class="flex flex-col">
        <span class="text-md font-bold">{{ product().title }}</span>
        <span class="text-sm"> {{ '$' + product().price }}</span>
        <span class="text-xs text-gray-500">Likes: {{ product().likes }}</span>
      </div>
      <div class="flex gap-2">
        <button (click)="likeProduct()" class="bg-blue-500 text-white px-3 py-1 rounded">Like</button>
        <button (click)="removeProduct()" class="bg-red-500 text-white px-3 py-1 rounded">Remove</button>
      </div>
    </div>
  `,
  styles: ``,
})
export class ProductCardComponent {
  product = input.required<Product>();

  onLike = output<Product>();
  onRemove = output<Product>();

  likeProduct() {
    this.onLike.emit(this.product());
  }

  removeProduct() {
    this.onRemove.emit(this.product());
  }
}
