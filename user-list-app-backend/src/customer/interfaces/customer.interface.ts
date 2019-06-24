// ./src/customer/interfaces/customer.interface.ts
import { Document } from 'mongoose';

export interface Customer extends Document {
    readonly first_name: string;
    readonly last_name: string;
    readonly created_at: Date;
}