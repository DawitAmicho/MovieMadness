import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import "./app.css";
import SearchIcon from "./search.svg";

//const Api_Url ='http://www.omdbapi.com?apikey=ac280c84';
const API = "https://online-movie-database.p.rapidapi.com/auto-complete?";
/*const movie= {
	"Title": "Amazing Spiderman Syndrome",
	"Year" : "2012", 
	"imdbID":"ss",
	"Type": "movie",
	"Poster":"N/A"
}*/

//fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=all ', options)
//.then(response => response.json())
//.then(response => console.log(response))
//.catch(err => console.error(err));

const App = () => {
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "7ebbe9f787mshfd41c35f8b85186p120b05jsn7b008d1d0e78",
        "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
      },
    };
    const response = await fetch(`${API}&q=${title}`, options);
    const data = await response.json();
    setMovies(data.d);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      await searchMovies("man");
    };
    fetchMovies();
  }, []);

  return (
    <div className="app">
      <h1>Movie Madness</h1>
      <div className="search">
        <input placeholder="search movie" value="search" onChange={() => {}} />
        <img src={SearchIcon} alt="search" onClick={() => {}} />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} />;
          })}
        </div>
      ) : (
        <div className="empty">
          <h2> No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
