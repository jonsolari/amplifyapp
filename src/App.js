import React from 'react';
import Movies from './components/Movies';
import About from './components/About';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1><a href="https://www.imdb.com/name/nm0005509/">Jon Turteltaub</a> Movie Poster Gallery</h1>
      <Movies />
      <About />
    </div>
  );
}

export default App;
