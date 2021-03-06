// ./src/customer/schemas/customer.schema.ts
import * as mongoose from 'mongoose';

export const CustomerSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    created_at: { type: Date, default: Date.now }
})