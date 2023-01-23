import mongoose from "mongoose";

let connectDB=async (url,dbName)=>{
    //mongodb://0.0.0.0:27017/tekiskyDB
    //url=0.0.0.0
    //dbName=tekiskyDB
   try {
    await mongoose.connect(`${url}/${dbName}`);
   } catch (error) {
    console.log(error)
   }
}

export default connectDB;