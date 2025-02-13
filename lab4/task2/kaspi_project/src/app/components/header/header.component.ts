import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="header">
      <button class="store-button">My Store</button>
    </div>
  `,
  styles: [`
    .header {
      background-color: #f1f5f9;
      padding: 16px 24px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .store-button {
      font-size: 1.5rem;
      background: none;
      border: none;
      cursor: pointer;
    }
  `]
})

export class HeaderComponent { }
