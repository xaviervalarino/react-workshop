import { useState } from "react";
import MovieList from "./components/MovieList";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchMoviesHandler() {
    setIsLoading(true);
    setError(null)
    try {
      const res = await fetch("https://swapi.dev/api/films/");
      if (!res.ok) {
        throw new Error("Something went wrong.");
      }
      const data = await res.json();
      console.log(data.results);
      setMovies(data.results);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }

  let content = <p>No movies.</p>;
  if (movies.length) {
    content = <MovieList movies={movies} />;
  }
  if (error) {
    content = <p style={{ color: "crimson", fontWeight: "bold" }}>{error}</p>;
  }
  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <div style={{ width: "60ch" }}>
      <h1>Movie List</h1>
      <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      {content}
    </div>
  );
}
