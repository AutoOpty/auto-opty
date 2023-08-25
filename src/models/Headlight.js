import mongoose, { Schema } from "mongoose";


const headlightSchema = new Schema({
    article: {
        type: String,
        unique: true,
        required: true,
    },
    photo: {
        type: Array,
    },
    video: {
        type: Array,
    },
    description: {
        type: String,
    },
    price: {
        type: String,
        required: true,
    },
    carBrand: {
        type: String,
        required: true,
    },
    carModel: {
        type: Array,
        required: true,
    },
    carPhoto: {
        type: String,
    },
    carBody: {
        type: Array,
        required: true, // ????
    }
},
    { timestamps: true },
)

export default mongoose.model("Headlight", headlightSchema)