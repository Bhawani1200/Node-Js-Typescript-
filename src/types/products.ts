import mongoose from 'mongoose'
export type GetallProductInput={
    name:string;
    price:string;
    brand:string;
    category:string;
    createdAt:Date;
}
export type CreateAllProduct={
    name:string;
    brand:string;
    category:string;
    price:string;
    
}
export type deleteAllProduct={
    id:mongoose.Types.ObjectId
    name:string;
    brand:string;
    category:string;
    price:string;
    createdAt:Date; 
}