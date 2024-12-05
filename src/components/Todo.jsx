import './Todo.css'
import './button.css'
import footerlogo from '../images/movie-collage.webp'
import { useState } from 'react'



const Todo = () => {
    const [movies, setMovies] = useState([])
    const search = async () => {
        const data = await fetch(
            `https://www.omdbapi.com/?i=tt3896198&apikey=b5cd70c4&s=fast`
          );
          const result = await data.json()
          const response = result.Search
          if (response) {setMovies(response)}
    }
    return (
        <>
            <div className="todo">
                <h2>Title</h2>
                <h3>paragraph</h3>
                
            <input className="button search" type="text" placeholder="Search.." required></input>
            <button className="button" onClick={() => ("searchMovie")}><b>submit</b></button>
            <input className="password" type="password" placeholder="password (optional)"></input>
            <select name="filter" id="filter" onChange={() => ("yearFilter")}>
                <option value="" disabled selected>select</option>
                <option value="newtoold">new to old</option>
                <option value="oldtonew">old to new</option>
            </select>
            <div>
                {movies.map((item) => 
                <div>
                <h2>{item.Title}</h2>
                <h3></h3>
                </div>
                )}
            </div>
            </div>
        </>
    )
}

export default Todo;