import Cart from '../Cart';
import Movie from '../Movie';
import Gadget from '../Gadget';

test('Правильно создается объект класса Cart', () => {
  const cart = new Cart();
  expect(cart.items.length).toBe(0);
});

test('Правильно работает метод add класса Cart', () => {
  const cart = new Cart();
  const movieOne = new Movie(1, 'Мстители', 2012, 'США', 'Avengers Assemble!', 'фантастика, боевик', 137, 300, 1);
  cart.add(movieOne);
  cart.add(new Movie(1, 'Мстители', 2012, 'США', 'Avengers Assemble!', 'фантастика, боевик', 137, 300, 1));
  cart.add(new Movie(35, 'Мстители 3', 2013, 'США', 'Avengers Assemble!', 'фантастика, боевик', 120, 200, 1));
  cart.add(new Movie(4, 'Мстители 4', 2013, 'США', 'Avengers Assemble!', 'фантастика, боевик', 120, 100, 1));
  cart.add(new Gadget(7, 'Телефон', 2022, 'Самсунг', 30500, 1));
  cart.add(new Gadget(7, 'Телефон', 2022, 'Самсунг', 30500, 1));
  console.log(cart.items)
  expect(cart.items.length).toBe(4);
  expect(cart.items[0]).toEqual(movieOne);
  expect(cart.items[3].count).toBe(2);
});

test('Правильно работает метод get класса Cart', () => {
  const cart = new Cart();
  expect(cart.items.length).toBe(0);
  cart.add(new Movie(1, 'Мстители', 2012, 'США', 'Avengers Assemble!', 'фантастика, боевик', 137, 300, 1));
  expect(cart.items.length).toBe(1);
});

test('Правильно работает метод getSum класса Cart', () => {
  const cart = new Cart();
  cart.add(new Movie(1, 'Мстители', 2012, 'США', 'Avengers Assemble!', 'фантастика, боевик', 137, 300, 1));
  cart.add(new Movie(1, 'Мстители', 2012, 'США', 'Avengers Assemble!', 'фантастика, боевик', 137, 300, 1));
  cart.add(new Movie(35, 'Мстители 3', 2013, 'США', 'Avengers Assemble!', 'фантастика, боевик', 120, 200, 1));
  cart.add(new Movie(4, 'Мстители 4', 2013, 'США', 'Avengers Assemble!', 'фантастика, боевик', 120, 100, 1));
  cart.add(new Gadget(7, 'Телефон', 2022, 'Самсунг', 30500, 1));
  cart.add(new Gadget(7, 'Телефон', 2022, 'Самсунг', 30500, 1));
  expect(cart.getSum()).toBe(61600);
});

test('Правильно работает метод getSumWithDisc класса Cart', () => {
  const cart = new Cart();
  cart.add(new Movie(1, 'Мстители', 2012, 'США', 'Avengers Assemble!', 'фантастика, боевик', 137, 300, 1));
  cart.add(new Movie(1, 'Мстители', 2012, 'США', 'Avengers Assemble!', 'фантастика, боевик', 137, 300, 1));
  cart.add(new Movie(35, 'Мстители 3', 2013, 'США', 'Avengers Assemble!', 'фантастика, боевик', 120, 200, 1));
  cart.add(new Movie(4, 'Мстители 4', 2013, 'США', 'Avengers Assemble!', 'фантастика, боевик', 120, 100, 1));
  cart.add(new Gadget(7, 'Телефон', 2022, 'Самсунг', 30500, 1));
  cart.add(new Gadget(7, 'Телефон', 2022, 'Самсунг', 30500, 1));
  expect(cart.getSumWithDisc(10)).toBe(55440);
});

test('Правильно работает метод del класса Cart', () => {
  const cart = new Cart();
  cart.add(new Movie(1, 'Мстители', 2012, 'США', 'Avengers Assemble!', 'фантастика, боевик', 137, 300, 1));
  cart.add(new Movie(35, 'Мстители 3', 2013, 'США', 'Avengers Assemble!', 'фантастика, боевик', 120, 200, 1));
  cart.add(new Movie(4, 'Мстители 4', 2013, 'США', 'Avengers Assemble!', 'фантастика, боевик', 120, 100, 1));
  cart.add(new Gadget(7, 'Телефон', 2022, 'Самсунг', 30500, 1));
  cart.add(new Gadget(7, 'Телефон', 2022, 'Самсунг', 30500, 1));
  cart.del(1);
  cart.del(7);
  expect(cart.items.findIndex((item) => {return item.id === 1})).toBe(-1);
  expect(cart.items.findIndex((item) => {return item.id === 7})).toBe(-1);
  expect(cart.items.length).toBe(2);
});

test('Правильно работает метод decreaseAmount класса Cart', () => {
  const cart = new Cart();
  cart.add(new Movie(1, 'Мстители', 2012, 'США', 'Avengers Assemble!', 'фантастика, боевик', 137, 300, 1));
  cart.add(new Movie(35, 'Мстители 3', 2013, 'США', 'Avengers Assemble!', 'фантастика, боевик', 120, 200, 1));
  cart.add(new Movie(4, 'Мстители 4', 2013, 'США', 'Avengers Assemble!', 'фантастика, боевик', 120, 100, 1));
  cart.add(new Gadget(7, 'Телефон', 2022, 'Самсунг', 30500, 1));
  cart.add(new Gadget(7, 'Телефон', 2022, 'Самсунг', 30500, 1));
  cart.add(new Gadget(7, 'Телефон', 2022, 'Самсунг', 30500, 1));
  cart.decreaseAmount(7);
  expect(cart.items[3].count).toBe(2);
  cart.decreaseAmount(1);
  expect(cart.items.findIndex((item) => {return item.id === 1})).toBe(-1);
  expect(cart.items.length).toBe(3);
});
