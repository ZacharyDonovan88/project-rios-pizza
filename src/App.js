import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from "./components/Home.js";
import Pizza from "./pages/Pizza.js";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Sides from "./pages/Sides";
import Drinks from "./pages/Drinks.js";
import Desserts from "./pages/Desserts.js";
import Deals from "./pages/Deals.js";
import Login from "./pages/Login.js";
import SignUp from "./pages/SignUp.js"


const httpLink = createHttpLink({
  uri: '/graphql',
});


const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});



function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Home />
          <Navbar />
          <Routes>
            <Route exact path="/Pizza" element={<Pizza />} />
            <Route exact path="/Sides" element={<Sides />} />
            <Route exact path="/Drinks" element={<Drinks />} />
            <Route exact path="/Desserts" element={<Desserts />} />
            <Route exact path="/Deals" element={<Deals />} />
            <Route exact path="/Login" element={<Login />} /> 
            <Route exact path="/Sign Up" element={<SignUp />} /> 
          </Routes>
          <Footer />
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;