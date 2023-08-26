import mongoose, { Schema } from "mongoose";


const detailSchema = new Schema({
    article: {
        type: String,
        unique: true,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    direction: {
        type: String,
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
    side: {
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
        type: String,
        required: true,
    }
},
    { timestamps: true },
)


// export default mongoose.model("Detail", detailSchema);
//If the Detail collection does not exist - create a new one.
export default mongoose.models.Detail || mongoose.model("Detail", detailSchema);