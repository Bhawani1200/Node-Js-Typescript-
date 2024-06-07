import mongoose from "mongoose";
export type LoginInput= {
    email:string;
    password:string;
}
export type RegisterInput={
    name:string;
    email:string;
    password:string;
    confirmPassword:string;
    //for optional
    roles ?:string[];
}
export type UserType={
    id:mongoose.Types.ObjectId;
    createdAt:Date;
    email:string;
    name:string;
    roles?:string[]
}
//For global or parent class to use in child class
// import mongoose from 'mongoose'
// type User={
//     email:string;
// }
// export type LoginInput= User &{
//     password:string;
// }
// export type RegisterInput=User &{
//     name:string;
//     password:string;
//     confirmPassword:string;
//     //for optional
//     roles ?:string[];
// }
// export type UserType=User &{
//     id:mongoose.Types.ObjectId;
//     createdAt:Date;
//     name:string;
//     roles?:string[]
// }