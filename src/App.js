import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import FetchRecipes from './components/FetchRecipes';
import ScrollToTop from "./components/ScrollToTop";
import './App.css';

function App() {

  return (
    <>
      <Router>
        <FetchRecipes />
        <ScrollToTop />
      </Router>
    </>

  );
}

export default App;