const mongoose = require('mngoose')

const productSchema = mongoose.Schema(
    {
        name:{
            type:string,
            required : [ true, "please entr product name"]
        },
        quality:{
            type: Number,
            required : true,
            default: 0
        },
        price:{
            type:Number,
            required: true
        },
        image:{
            type:String,
            required: false
        }   
    },
    {
        timestamps:true
    }
)

const Product = mongoose.models('Product', productSchema);
model.exports = Product;