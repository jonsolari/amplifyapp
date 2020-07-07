import React from 'react';
import MovieCard from './components/MovieCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Jon Turteltaub Movie List</h1>
      <p>populated via themoviedb.org</p>
      <MovieCard />
    </div>
  );
}

export default App;
