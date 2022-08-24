export default function MovieList({ movies }) {
  const movieList = movies.map((movie) => (
    <li style={{ padding: "0" }} key={movie.id}>
      <hr />
      <h2>{movie.title}</h2>
      <h4>{movie.releaseDate}</h4>
      <p>{movie.openingText}</p>
    </li>
  ));
  return <ul style={{ listStyleType: "none", padding: "0" }}>{movieList}</ul>;
}
