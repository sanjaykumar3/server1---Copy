import UserProfileInfo from '../Models/User_Profile.js'

const resolvers = {
    Query: {
        getUserProfile: async (_, { email }) => {
            try {
                const userProfile = await UserProfileInfo.findOne({ email });
                return userProfile;
            } catch (error) {
                console.log(error);
                throw error;
            }
        },
    },
    Mutation: {
        updateUserProfile: async (_, { input }) => {
            try {
                const { email, ...rest } = input;
                const userProfile = await UserProfileInfo.findOneAndUpdate(
                    { email },
                    { ...rest },
                    { new: true, upsert: true }
                );
                return userProfile;
            } catch (error) {
                console.log(error);
                throw error;
            }
        },
    },
};

export default resolvers;