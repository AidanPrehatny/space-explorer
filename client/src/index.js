import React from "react";
import gql from "graphql-tag";
import { render } from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

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

const App = () => (
  <ApolloProvider client={client}>
    <div>
        <h2>My first Apollo app
            <span role="img" aria-label="gucci">🚀</span>
        </h2>
    </div>
  </ApolloProvider>
);

render(<App />, document.getElementById("root"));