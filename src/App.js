import React from 'react';
import { ApolloProvider } from '@apollo/client';

import client from './graphql/client';
import AddTeam from './components/AddTeam';
import AddPlayer from './components/AddPlayer';
import Teams from './components/Teams';

function App() {
  return (
    <ApolloProvider client={client}>
      <AddTeam />
      <AddPlayer />
      <Teams />
    </ApolloProvider>
  );
}

export default App;
