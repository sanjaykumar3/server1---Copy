import RegisterInfo from "../Models/User_Account_Register_model.js";
import UserProfileInfo from "../Models/User_Profile.js";

const resolvers = {
  Mutation: {
    createRegisterUser: async (_, { input }) => {
      try {
        input.createdAt = new Date().toISOString; // Add this line
        const createRegisterUser = new RegisterInfo(input);
        await createRegisterUser.save();
        // Create a new UserProfile document
        const userProfile = new UserProfileInfo({
          firstName: input.firstName,
          lastName: input.lastName,
          email: input.email,
          phone: input.phone,
          // Add other fields as necessary
          // Other fields...
          address: input.address || "Default address",
          gender: input.gender || "Default gender",
          dob: input.dob || new Date(),
        });
        await userProfile.save();
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
