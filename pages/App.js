import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Navbar from './components/Navbars/Navbar';
import Routes from './Pages/helpers/Routes';
import Footer from './components/Footers/Footer';
import Client from './Pages/helpers/graphqlEndpoints';
import { ApolloProvider } from '@apollo/react-hooks';

export default function App() {
  return (
    <BrowserRouter>
      <ApolloProvider client={Client}>
          <Navbar />
          <Routes />
          <Footer />
      </ApolloProvider>
    </BrowserRouter>
  );
}