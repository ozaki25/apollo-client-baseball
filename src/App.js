import React from 'react';
import { ApolloProvider } from '@apollo/client';

import client from './graphql/client';
import Teams from './components/Teams';

function App() {
  return (
    <ApolloProvider client={client}>
      <Teams />
    </ApolloProvider>
  );
}

export default App;
