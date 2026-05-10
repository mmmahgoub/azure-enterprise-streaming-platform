import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/movies')
      .then((response) => setMovies(response.data));
  }, []);

  return (
    <div>
      <h1>Netflix Clone</h1>

      {movies.map((movie) => (
        <div key={movie._id}>
          <h3>{movie.title}</h3>
          <p>{movie.description}</p>
        </div>
      ))}
    </div>
  );
}

export default App;