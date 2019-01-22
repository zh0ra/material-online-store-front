import { Order } from './order.model';
import { Address } from './address.model';
import { UserBilling } from './user-billing';
import { UserPayment } from './user-payment';

export class User {
    public id: number;
    public firstName?: string;
    public lastName?: string;
    public username: string;
    public password: string;
    public email: string;
    public gender: string;
    public age: number;
    public contactPhone?: string;
    public isActived?: boolean;
    public enabled: boolean;
    public langCode?: string;
    public date?: Date;
    public isAdming: boolean;
    public historyOfPurchasing?: Order[];
    public address: Address;
    public userPaymentList: UserPayment[];
    public userBillingList: UserBilling[];

    consructor() { }
}
