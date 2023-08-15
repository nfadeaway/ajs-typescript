import Buyable from './Buyable';
import Movie from './Movie';
import Gadget from './Gadget';

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    const idx = this._items.findIndex((existingItem) => {return existingItem.id === item.id});
    if (idx === -1) {
      this._items.push(item);          
    } else if (!(item instanceof Movie)) {
      this._items[idx].count += 1
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






// const firstMovie = new Movie(1, 'Мстители', 2012, 'США', 'Avengers Assemble!', 'фантастика, боевик', 137, 300, 1)
// const secondMovie = new Movie(2, 'Мстители 2', 2013, 'США', 'Avengers Assemble!', 'фантастика, боевик', 120, 400, 1)
// const thirdMovie = new Movie(35, 'Мстители 3', 2013, 'США', 'Avengers Assemble!', 'фантастика, боевик', 120, 200, 1)
// const fourMovie = new Movie(4, 'Мстители 4', 2013, 'США', 'Avengers Assemble!', 'фантастика, боевик', 120, 100, 1)

// const firstGadget = new Gadget(7, 'Телефон', 2022, 'Самсунг', 30500, 1)
// const secondGadget = new Gadget(7, 'Телефон', 2022, 'Нокиа', 40000, 1)



// const cart = new Cart();
// cart.add(firstMovie)
// cart.add(secondMovie)
// cart.add(thirdMovie)
// cart.add(fourMovie)

// cart.add(firstGadget)
// cart.add(firstGadget)


// // console.log(cart.items)
// // cart.del(35)
// console.log(cart.items)
// console.log(cart.getSum())
// console.log(cart.getSumWithDisc(10))
// cart.decreaseAmount(1)
// cart.decreaseAmount(2)
// cart.decreaseAmount(35)
// cart.decreaseAmount(4)
// cart.decreaseAmount(7)
// cart.decreaseAmount(7)
// console.log(cart.items)
