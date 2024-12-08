import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const MovieDetails = () => {
  const { id } = useParams(); // Get the movie ID from the URL
  const [movie, setMovie] = useState(null); // State to store movie details

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const data = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=b5cd70c4`);
      const result = await data.json();
      if(result){
        setMovie(result);
      } // Save the fetched movie details
    };

    fetchMovieDetails();
  }, [id]); // Trigger re-fetch if the ID changes

  
  return (
    <div>
      {movie && (
        <>
          <h1>{movie.Title}</h1>
          <img src={movie.Poster} alt={`${movie.Title} Poster`} />
          <p><strong>Year:</strong> {movie.Year}</p>
          <p><strong>Genre:</strong> {movie.Genre}</p>
          <p><strong>Director:</strong> {movie.Director}</p>
          <p><strong>Actors:</strong> {movie.Actors}</p>
          <p><strong>Plot:</strong> {movie.Plot}</p>
          <p><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
        </>
      )}
    </div>
  );
};