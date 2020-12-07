import { ICustomer } from "../Common";
import { ObjectFormatter } from "../Utilities";

class Customer implements ICustomer {
    public constructor(public customerId: number, public customerName: string,
        public address: string, public email: string, public phoneNumber: string,
        public customerType: string, public creditLimit: number,
        public activeStatus: boolean, public remarks: string) {
    }

    toString() {
        return ObjectFormatter.format(this);
    }
}

export {
    Customer
};