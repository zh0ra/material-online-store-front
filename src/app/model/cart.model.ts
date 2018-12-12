import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { CartLine } from './cart-line.model';

@Injectable()
export class Cart {
  public lines: CartLine[] = [];
  public itemCount = 0;
  public cartPrice = 0;

  addLine(_product: Product, quantity: number = 1) {
    const line = this.lines.find(l => l.product.id === _product.id);
    if (line !== undefined) {
      line.quantity += quantity;
    } else {
      this.lines.push(new CartLine(_product, quantity));
    }
    this.recalculate();
  }

  updateQuantity(product: Product, quatity: number) {
    const line = this.lines.find(l => l.product.id === product.id);
    if (line !== undefined) {
      line.quantity = Number(quatity);
    }
  }

  removeLine(id: number) {
    const index = this.lines.findIndex(l => l.product.id === id);
    this.lines.splice(index);
    this.recalculate();
  }

  clear() {
    this.lines = [];
    this.itemCount = 0;
    this.cartPrice = 0;
  }

  recalculate() {
    this.itemCount = 0;
    this.cartPrice = 0;
    this.lines.forEach(l => {
      this.itemCount += l.quantity;
      this.cartPrice += (l.quantity * l.product.id);
    });
  }
}
