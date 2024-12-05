import './Todo.css'
import './button.css'
import footerlogo from '../images/movie-collage.webp'


function Todo({ title, paragraph }) {
    return (
        <>
            <div className="todo">
                <h2>{title}</h2>
                <h3>{paragraph}</h3>
                <button className="button"><b>Home</b></button>
                <button className="button"><b>Movie Search</b></button>
                <button className="button"><b>Contact</b></button>
            <input className="button search" type="text" placeholder="Search.." required></input>
            <button className="button" onClick={() => ("searchMovie")}><b>submit</b></button>
            <input class="password" type="password" placeholder="password (optional)"></input>
            <select name="filter" id="filter" onChange={() => ("yearFilter")}>
                <option value="" disabled selected>select</option>
                <option value="newtoold">new to old</option>
                <option value="oldtonew">old to new</option>
            </select>
            </div>
        </>
    )
}

export default Todo;