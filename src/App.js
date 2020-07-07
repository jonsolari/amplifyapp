import React from 'react';
import Movies from './components/Movies';
import About from './components/About';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Jon Turteltaub Movie Poster Gallery</h1>
      <About />
      <Movies />
    </div>
  );
}

export default App;
