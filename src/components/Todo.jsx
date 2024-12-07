import "./Todo.css";
import "./button.css";
import footerlogo from "../images/movie-collage.webp";
import { useRef, useState } from "react";

const Todo = () => {
  const [movies, setMovies] = useState([]);
  const [value, setValue] = useState();
  const search = async () => {
    const data = await fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=b5cd70c4&s=${value}`
    );
    const result = await data.json();
    const response = result.Search;
    if (response) {
      setMovies(response);
    }
    // console.log(value);
  };
  return (
    <>
      <div className="todo">
        <h2>Title</h2>
        <h3>paragraph</h3>
        <input
          className="button search"
          type="text"
          placeholder="Search.."
          onChange={(event) => setValue(event.target.value)}
          required
        ></input>
        <button className="button" onClick={() => search()}>
          <b>submit</b>
        </button>
        <input
          className="password"
          type="password"
          placeholder="password (optional)"
        ></input>
        <select name="filter" id="filter" onChange={() => "yearFilter"}>
          <option value="" disabled selected>
            select
          </option>
          <option value="newtoold">new to old</option>
          <option value="oldtonew">old to new</option>
        </select>
        <div>
          {movies.map((item) => (
            <div>
              <h2>{item.Title}</h2>
              <h2>{item.Year}</h2>
              {/* <h1>{item.Poster}</h1> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Todo;