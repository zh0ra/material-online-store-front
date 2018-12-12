import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { ProductService } from '../services/product.service';
@Injectable()
export class ProductRepository {
    private products: Product[] = [];
    private categories: string[] = [];
    constructor(private datasoruce: ProductService) {
        // this.products = datasoruce.getProducts().subscribe({
        //     this.products = data;
        //     this.categories = data.map(p => p.category).filter((c, index,array) => array);
        // });
            }

    getProducts(): Product[] {
        return this.products;
    }

    getCategories(): string[] {
        return this.categories;
    }
}
