import ProductBanner from "../Models/ProductBanner.js" // Replace with your actual model

const resolvers = {
    Query: {
        getproductbanner: async () => {
            // Fetch the list of product banners from your database and return it
            return await ProductBanner.find();
        },
    },
    Mutation: {
        updateproductbanner: async (_, { input }) => {
            // Update an existing product banner in your database using the input and return it
            const updatedProductBanner = await ProductBanner.findByIdAndUpdate(
                input.id,
                input,
                { new: true }
            );
            return updatedProductBanner;
        },
    },
};

export default resolvers;