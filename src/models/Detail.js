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
     titleEn: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    photos: {
        type: Array,
    },
    description: {
        type: String,
    },
    descriptionEn: {
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
    carModels: {
        type: Array,
        required: true,
    },
    carBodies: {
        type: Array,
        required: true,
    },
    installedFrom: {
        type: String,
        required: true,
    },
    installedUntil: {
        type: String,
        required: true,
    }
},
    { timestamps: true },
)


// export default mongoose.model("Detail", detailSchema);
//If the Detail collection does not exist - create a new one.
export default mongoose.models.Detail || mongoose.model("Detail", detailSchema);