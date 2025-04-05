import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    discount: {
        type: String,
        required: true
    },
    images: [
        {
            url: String,
            publicId: String
        }
    ],
    sizes: [],
    category: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const Product = mongoose.model("Product", productSchema);
export default Product;