import mongoose from 'mongoose'
const connectDB=async()=>{
try {
    mongoose.connect('mongodb://localhost:27017/codeit')
    console.log('Mongodb connected successfully')
} catch (error:any) {
    console.log(error.message)
    process.exit(1)
}
}
export default connectDB