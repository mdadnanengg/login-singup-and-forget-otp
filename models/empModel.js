import mongoose from "mongoose";

const empSchema=mongoose.Schema({
    name:{type:String,require:true},
    age:Number,
    addr:{type:String},
    password:String
});

const empModel=mongoose.model('employee',empSchema);

export default empModel;