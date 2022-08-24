import { useRef } from "react";

export default function AddMovie(props) {
  const titleRef = useRef("");
  const openingTextRef = useRef("");
  const releaseDateRef = useRef("");

  const Flex = (props) => (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {props.children}
    </div>
  );

  function submitHandler(e) {
    e.preventDefault();
    const movie = {
      title: titleRef.current.value,
      openingText: openingTextRef.current.value,
      releaseDate: releaseDateRef.current.value,
    };
    props.onAddMovie(movie);
  }

  return (
    <form
      onSubmit={submitHandler}
      style={{
        border: "2px solid",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        marginTop: "1rem",
      }}
    >
      <Flex>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" ref={titleRef} />
      </Flex>
      <Flex>
        <label htmlFor="date">Release Date</label>
        <input id="date" ref={releaseDateRef} />
      </Flex>
      <Flex>
        <label htmlFor="opening-text">Opening Text</label>
        <textarea id="opening-text" ref={openingTextRef} />
      </Flex>
      <button>Add Movie</button>
    </form>
  );
}
