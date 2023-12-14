import ProductListCard from '../Models/ProductListCard_model.js'

const resolvers = {
  Query: {
    getProductListCards: async () => {
      // Fetch the list of gproductlistcard from your database and return it
      return await ProductListCard.find();
    },
  },
  Mutation: {
    createProductListCard: async (_, { input }) => {
      // Create a new gproductlistcard in your database using the input and return it
      const newProductListCard = new ProductListCard(input);
      const savedProductListCard = await newProductListCard.save();
      return { id: savedProductListCard._id, data: savedProductListCard };
    },
    updateProductListCard: async (_, { input }) => {
      // Update an existing gproductlistcard in your database using the input and return it
      const updatedProductListCard = await ProductListCard.findByIdAndUpdate(
        input.id,
        input,
        { new: true }
      );
      // return updatedProductListCard;
      return { id: updatedProductListCard._id, data: updatedProductListCard };
    },
  },
};
export default resolvers;