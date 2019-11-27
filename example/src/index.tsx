import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ExchangeRates } from './ExchangeRates';
import * as serviceWorker from './serviceWorker';
import ApolloClient from './typescript-lib';
import { ApolloProvider } from '@apollo/react-hooks';


const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
});

const Main = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>My first Apollo app <span role="img" aria-label="rocket emoji">🚀</span></h2>
      <ExchangeRates />
    </div>
  </ApolloProvider>
);

ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
