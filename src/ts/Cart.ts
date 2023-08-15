import Buyable from './Buyable';
import Movie from './Movie';

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    const idx = this._items.findIndex((existingItem) => {return existingItem.id === item.id});
    if (idx === -1) {
      this._items.push(item);          
    } else if (!(item instanceof Movie)) {
      this._items[idx].count += 1;
    }
  }

  get items(): Buyable[] {
    return [...this._items];
  }

  getSum(): number {
    return this._items.reduce((acc, item) => acc + (item.price * item.count), 0);
  }

  getSumWithDisc(discount: number): number {
    return this._items.reduce((acc, item) => acc + (item.price - (item.price / 100 * discount)) * item.count, 0);
  }

  del(id: number): void {
    const idx = this._items.findIndex((item) => {return item.id === id});
    if (idx !== -1) {
      this._items.splice(idx, 1);
    }      
  }
  
  decreaseAmount(id: number): void {
    const idx = this._items.findIndex((item) => {return item.id === id});
    if (idx !== -1) {
      this._items[idx].count -= 1;
      if (this._items[idx].count === 0) {
        this.del(id);
      }
    }
  }
}
