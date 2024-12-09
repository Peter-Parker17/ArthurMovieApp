import "./Todo.css";
import "./button.css";
import footerlogo from "../images/movie-collage.webp";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Skeleton.css"

const Todo = () => {
    const [movies, setMovies] = useState([]);
    const [value, setValue] = useState();
    const [isLoading, setIsLoading] = useState(false); // by default it will be false
    const [sortOrder, setSortOrder] = useState(''); // we would need to use this useState to track current filter
    const search = async (event) => {
        if (event) {
            event.preventDefault();
        }
        setIsLoading(true); // when its fetching for the api it will be true 
        const data = await fetch(
            `https://www.omdbapi.com/?i=tt3896198&apikey=b5cd70c4&s=${value}`
        );
        const result = await data.json();
        const response = result.Search;
        if (response) {
            setMovies(response);
        }
         // when it finsihes the loading state it will return false
        setTimeout(() => {
            // search()
            setIsLoading(false)
        }, 3000)
    };
//this is the sort function where the filtering logic is
const handleSort = (event) => {
        const order = event.target.value;
        setSortOrder(order);
        
        const sortedMovies = [...movies].sort((a, b) => {
            if (order === 'newtoold') {
                return parseInt(b.Year) - parseInt(a.Year);
            } else if (order === 'oldtonew') {
                return parseInt(a.Year) - parseInt(b.Year);
            }
            return 0;
        });
        
        setMovies(sortedMovies);
    };

    return (
        <>
            <div className="todo">
                <form onSubmit={search}>
                    <input
                        className="button search"
                        type="text"
                        placeholder="Search.."
                        onChange={(event) => setValue(event.target.value)}
                        required
                    ></input>
                </form>
                <button className="button">
                    <b>submit</b>
                </button>
                <input
                    className="password"
                    type="password"
                    placeholder="password (optional)"
                ></input>
                 <select 
            name="filter" 
            id="filter" 
            value={sortOrder}
            onChange={handleSort} // added the sort function to here 
        >
            <option value="" disabled>select</option>
            <option value="newtoold">new to old</option>
            <option value="oldtonew">old to new</option>
        </select>
                <div>
                    {isLoading ? (
                        // when loading state is true we are going to display the skelton loading state
                        <div className="">
                            <div className=".skeleton"></div>
                            <div className=".skeleton"></div>
                            <div className=".skeleton__poster"></div>
                            {/* //add skeleton ui here for the movies */}
                        </div>
                    ) : (
                        movies.map((item) => (
                            <div key={item.imdbID}>
                                <Link to={`/${item.imdbID}`}>
                                    <h2>{item.Title}</h2>
                                    <h2>{item.Year}</h2>
                                    <img src={item.Poster} alt="" />
                                </Link>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </>
    );
};

export default Todo;