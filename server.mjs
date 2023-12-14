// const express = require('express');
import express from "express";
// const { ApolloServer } = require('apollo-server-express');
import { ApolloServer } from "apollo-server-express";
// const mongoose = require('mongoose');
import mongoose from "mongoose";
// 2. Import Firebase into your JavaScript file
// Import the functions you need from the SDKs you need
import cors from "cors";
import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwu03-zNN9y2t7vxzAqUWv92--nsk-ouE",
  authDomain: "gtky-e53e0.firebaseapp.com",
  projectId: "gtky-e53e0",
  storageBucket: "gtky-e53e0.appspot.com",
  messagingSenderId: "606156251116",
  appId: "1:606156251116:web:43059866503882ea2e6ac9",
  measurementId: "G-67RZ59W13C",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebaseApp);

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";
// import User_Account_Register_model from './Models/User_Account_Register_model';
import typedef1 from "./TypeDefs/User_Account_Register_typeDefs.js";
import typedef2 from "./TypeDefs/pUser_Profile_typeDefs.js";
import typedef3 from "./TypeDefs/Product_List_Card_typeDefs.js";
import typedef4 from "./TypeDefs/ProductListBanner_typeDefs.js";
import mutationResolvers1 from "./Resolvers/User_Account_Register_resolver.js";
import mutationResolvers2 from "./Resolvers/User_Profile_resolveres.js";
import mutationResolvers3 from "./Resolvers/Product_List_Card_resolvers.js";
import mut4 from "./Resolvers/ProductListBanner_reolvers.js";

// Connect to MongoDB
const YOUR_MONGO_DB_URL =
  "mongodb+srv://graphql-mongo:KFh4SPkVtxP5PWzG@mongo-graph.x48jhwr.mongodb.net/";
mongoose.connect(YOUR_MONGO_DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const typeDefs = mergeTypeDefs([typedef1, typedef2, typedef3, typedef4]);

const resolvers = mergeResolvers([
  mutationResolvers1,
  mutationResolvers2,
  mutationResolvers3,
  mut4,
]);

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
app.use(cors());

// await server.start();
// server.applyMiddleware({ app });

// app.listen({ port: 4000 }, () =>
//   console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
// );
(async () => {
  await server.start();
  server.applyMiddleware({ app, path: "/", cors: true });

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
})();
