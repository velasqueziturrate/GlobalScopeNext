import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Navbar from './components/Navbars/Navbar';
import Footer from './components/Footers/Footer';
import Client from '../helpers/graphqlEndpoints'
import { ApolloProvider } from '@apollo/react-hooks';

export default function App() {
  return (
    <BrowserRouter>
      <ApolloProvider client={Client}>
          <Navbar />
          <Footer />
      </ApolloProvider>
    </BrowserRouter>
  );
}