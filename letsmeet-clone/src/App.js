import React from 'react';
import Header from './Header';
import SparkCards from './SparkCards';
import './App.css';
import SwipeButtons from './SwipeButtons';

function App() {
  return (
    <div className="app">
      
      <Header/>
      <SparkCards/>
      <SwipeButtons/>
    </div>
  );
}

export default App;
