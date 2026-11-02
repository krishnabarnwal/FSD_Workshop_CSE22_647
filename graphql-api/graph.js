const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

// Define GraphQL schema
const schema = buildSchema(`
    type Query {
        Name: String
        Email: String
        RollNo: Int
    }
`);

// Define resolver functions
const root = {
    Name: () => {
        return 'Manisha';
    },

    Email: () => {
        return 'abc@gmail.com';
    },

    RollNo: () => {
        return 20;
    }
};

// Create Express application
const app = express();

// GraphQL endpoint
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

// Start server
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000/graphql');
});