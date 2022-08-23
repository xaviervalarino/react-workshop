export default function MovieList({ movies }) {
  const movieList = movies.map((movie) => (
    <li style={{ padding: "0" }} key={movie.episode_id}>
      <hr />
      <h2>{movie.title}</h2>
      <h4>{movie.release_date}</h4>
      <p>{movie.opening_crawl}</p>
    </li>
  ));
  return <ul style={{ listStyleType: "none", padding: "0" }}>{movieList}</ul>;
}
