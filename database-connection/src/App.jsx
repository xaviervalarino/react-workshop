import { useState } from "react";
import MovieList from "./components/MovieList";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchMoviesHandler() {
    setIsLoading(true);
    const res = await fetch("https://swapi.dev/api/films/");
    const data = await res.json();
    console.log(data.results);
    setMovies(data.results);
    setIsLoading(false);
  }

  return (
    <div style={{ width: "60ch" }}>
      <h1>Movie List</h1>
      <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      {(!isLoading && <MovieList movies={movies} />) || <p>Loading...</p>}
    </div>
  );
}
