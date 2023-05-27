// apollo-server-express and db-connection code residence     

//express code 
const express = require('express'); 
const path = require('path'); 

//db connection 
 const db = require('./config/connection')

// const { ApolloServer } = require('apollo-server-express'); 
// const { typeDefs, resolvers} = require('./graphql')

//const withAuth = require('./utils/auth')

//set port 
const PORT = process.env.PORT || 3001;

//app instantiation 
const app = express(); 


// Apolloserver constructor 
// const server = new ApolloServer({
//     typeDefs, 
//     resolvers,
//     // context: withAuth
// })

// start applo server then apply middleware app object. 
// server.start().then(() => {
//     server.applyMiddleware({app})
// })

app.use(express.urlencoded({extended: true})); 
app.use(express.json()); 


// serving distribution folder build 
app.use(express.static(path.join(__dirname, "../client/build"))); 

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
}); 

//db connection once started express erver listen
db.once('open', () => {
    app.listen(PORT, () => { 
        console.log(`exp.server.runnning: http://localhost:${PORT}`); 
       // console.log(`gql.dev.server.running: http://localhost:${PORT}${server.graphqlPath}`)
    })
})