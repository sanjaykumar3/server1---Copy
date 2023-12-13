// const express = require('express');
import express from 'express';
// const { ApolloServer } = require('apollo-server-express');
import { ApolloServer } from 'apollo-server-express';
// const mongoose = require('mongoose');
import mongoose from 'mongoose';
import { mergeTypeDefs ,mergeResolvers } from '@graphql-tools/merge';
// import User_Account_Register_model from './Models/User_Account_Register_model';
import typedef1 from './TypeDefs/User_Account_Register_typeDefs.js'
import mutationResolvers1 from './Resolvers/User_Account_Register_resolver.js'


// Connect to MongoDB
const YOUR_MONGO_DB_URL = "mongodb+srv://graphql-mongo:KFh4SPkVtxP5PWzG@mongo-graph.x48jhwr.mongodb.net/";
mongoose.connect(YOUR_MONGO_DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const typeDefs = mergeTypeDefs([typedef1])


const resolvers = mergeResolvers([mutationResolvers1]);

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();

// await server.start();
// server.applyMiddleware({ app });

// app.listen({ port: 4000 }, () =>
//   console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
// );
(async () => {
    await server.start();
    server.applyMiddleware({ app });
  
    app.listen({ port: 4000 }, () =>
      console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
    );
  })();