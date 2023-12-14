import mongoose from 'mongoose';

const ProductListCardSchema = new mongoose.Schema({
    productImage: { type: String, required: true },
    oldPrice: { type: String, required: true },
    newPrice: { type: String, required: true },
    discount: { type: String, required: true },
    stockqty: { type: String, required: true },
    isliked: { type: Boolean, default: false },
    arrivalnew: { type: Boolean, default: false },
    // user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const ProductListCard = mongoose.model('ProductListCard', ProductListCardSchema);

export default ProductListCard;