import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import InitialScroll from './components/InitialScroll';
import FetchRecipes from './components/FetchRecipes';
import ScrollToTop from "./components/ScrollToTop";
import './App.css';

function App() {

  return (
    <Router>
      <InitialScroll>
        <FetchRecipes />
        <ScrollToTop />
      </InitialScroll>
    </Router>

  );
}

export default App;