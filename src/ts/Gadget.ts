import Buyable from './Buyable';

export default class Gadget implements Buyable {
  constructor(
    readonly id: number, 
    readonly name: string, 
    readonly year: number, 
    readonly company: string, 
    readonly price: number,
    readonly count: number,
    ) {
  }
}
