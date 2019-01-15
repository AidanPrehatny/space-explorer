import React from "react";
import gql from "graphql-tag";
import { render } from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Pages from './pages';

const client = new ApolloClient({
    uri: "http://localhost:4000/graphql"
});

client
  .query({
    query: gql`
      query GetLaunch {
        launch(id: 56) {
          id
          mission {
            name
          }
        }
      }
    `
  })
  .then(result => console.log(result));

render(
  <ApolloProvider client={client}>
    <Pages />
</ApolloProvider>, document.getElementById('root'));