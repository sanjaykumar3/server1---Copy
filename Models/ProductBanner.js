import mongoose from 'mongoose';

const ProductBannerSchema = new mongoose.Schema({
    productImage: {
        type: String,
        required: false,
    },
    label: {
        type: String,
        required: false,
    },
    product_list: {
        type: String,
        required: false,
    },
});

const ProductBanner = mongoose.model('ProductBanner', ProductBannerSchema);

export default ProductBanner;