import mongoose, { Schema } from 'mongoose';

const assetSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    categories: { type: [String], required: true },
    image: { type: String, required: true },
    slug: { type: String, required: true, unique: true, index: true },
    assetURL: { type: String, required: true },
    keywords: { type: [String], required: true },
    viewCount: { type: Number, required: true },
    createdAt: { type: Number, required: true },
});

// Ensure virtual fields are serialised.
assetSchema.set('toJSON', { virtuals: true });

export default mongoose.model('Asset', assetSchema);
