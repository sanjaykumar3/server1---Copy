import RegisterInfo from "../Models/User_Account_Register_model.js";

const resolvers = {
    Mutation: {
        createRegisterUser: async (_, { input }) => {
            try {
                const createRegisterUser = new RegisterInfo(input);
                await createRegisterUser.save();
                return createRegisterUser;
            } catch (error) {
                console.log(error);
                throw error;
            }
        },
    },
    Query: {
        getRegisterUserInfo: async (_, { email }) => {
            try {
                const user = await RegisterInfo.findOne({ email });
                return user;
            } catch (error) {
                console.log(error);
                throw error;
            }
        },
    },
};

export default resolvers;