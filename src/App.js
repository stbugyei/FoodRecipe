import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import FetchRecipes from './components/FetchRecipes';
import './App.css';

function App() {

  return (
    <Router>
      <FetchRecipes />
    </Router>
  );
}

export default App;