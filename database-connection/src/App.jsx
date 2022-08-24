import { useCallback, useEffect, useState } from "react";
import MovieList from "./components/MovieList";
import AddMovie from "./components/AddMovie";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch(
        "https://react-workshop-679c8-default-rtdb.firebaseio.com/movies.json"
      );
      if (!res.ok) {
        throw new Error("Something went wrong.");
      }
      const data = await res.json();
      console.log("fetch results", data);
      setMovies(
        Object.keys(data).map((key) => ({
          id: key,
          title: data[key].title,
          releaseDate: data[key].releaseDate,
          openingText: data[key].openingText,
        }))
      );
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  const addMovieHandler = async (movie) => {
    try {
      const res = await fetch(
        "https://react-workshop-679c8-default-rtdb.firebaseio.com/movies.json",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(movie),
        }
      );
      const data = await res.json();
      console.log(data);
      fetchMoviesHandler();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log("useEffect fired");
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

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
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <h1>Movie List</h1>
        {content}
      </section>
    </div>
  );
}
