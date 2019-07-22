import { Products } from './products';

export class cartProduct {
    product: Products;
    count: number;

    constructor(product: Products, count: number) {
        this.product = product;
        this.count = count;
    }
}
