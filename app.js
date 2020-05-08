var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String,
    date: String, 
  }

`);

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Helllo!';
  },
  date: () =>{
      let date = new Date();
      return 'Todays date ' + date.getFullYear.toString(); 
  }
};

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(process.env.PORT ||4000);
console.log('Listening on port' + app.PORT);