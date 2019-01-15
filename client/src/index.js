import React from "react";
import gql from "graphql-tag";
import ReactDOM from "react-dom";
import { InMemoryCache, HttpLink } from "apollo-boost";
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "react-apollo";
import {Pages} from './pages/index.js';

const cache = new InMemoryCache();

const client = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: 'http://localhost:4000/graphql',
    headers: {
      authorization: localStorage.getItem('token'),
    },
  })
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

ReactDOM.render(
  <ApolloProvider client={client}>
    <Pages />
  </ApolloProvider>,
  document.getElementById('root')
);