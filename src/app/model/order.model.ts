
import { Product } from './product.model';
export class Order {
    constructor(
private userId: number,
private orderId: number,
private listOfProducts: Product[]
    ) { }
}
