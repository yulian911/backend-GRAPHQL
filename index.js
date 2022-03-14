const express = require('express')
const {ApolloServer} =require('apollo-server-express')
const mongoose = require('mongoose')
const typeDefs = require('./typeDef')
const resolvers =require('./resolvers')

const URL ="mongodb+srv://admin:a1231231@graphql.msynt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const app = express()

mongoose.connect(URL,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
},console.log("DB STARTED"))


const startServer = async()=>{

   
    const apolloServer =new ApolloServer({
        typeDefs,
        resolvers
    })
    await apolloServer.start()
    apolloServer.applyMiddleware({app:app})
    app.listen(4000,()=>{console.log('Server started port 4000')})

}

startServer()