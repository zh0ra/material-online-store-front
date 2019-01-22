import { Producer } from './producer.model';
import { Category } from './category.model';
export class Product {
        public id?: number;
       public productName: string;
        public productTitle: string;
        public producer: Producer;
        public category: Category;
        public listPrice: number;
        public ourPrice: number;
        public piceCurrency: string;
        public shippingWeight: number;
        public inStockNumber: number;
        public active: boolean;
        public publicationDate: Date;
        public expiryDate?: Date;
        public productDescription: string;
        public lastChange?: boolean;
        public imageS?: string;
        public imageL?: string;

        constructor(){}
}

