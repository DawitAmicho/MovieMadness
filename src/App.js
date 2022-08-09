import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import "./app.css";
import SearchIcon from "./search.svg";
//import ClipLoader from "react-spinners/ClipLoader";
//const Api_Url ='http://www.omdbapi.com?apikey=ac280c84';
const API = "https://online-movie-database.p.rapidapi.com/auto-complete?";
/*const movie1 = {
  Title: "Amazing Spiderman Syndrome",
  Year: "2012",
  imdbID: "ss",
  Type: "movie",
  Poster: "N/A",
};*/

//fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=all ', options)
//.then(response => response.json())
//.then(response => console.log(response))
//.catch(err => console.error(err));

const App = () => {
  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1500);
  // }, []);
  // <div>
  //         {loading ? (
  //           <ClipLoader color={"#E010A1"} loading={loading} size={150} />
  //         ) : (

  //         )}
  //       </div>

  const [movies, setMovies] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  const searchMovies = async (title) => {
    console.log(title);
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "05090b85a3msh9fa7bba9dbeb353p17dc13jsna6e9e7d2b297",
        "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
      },
    };
    const response = await fetch(`${API}&q=${title}`, options);
    const data = await response.json();
    setMovies(data.d);
    console.log(data);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      await searchMovies("movie");
    };
    fetchMovies();
  }, []);

  return (
    <div className="app">
      <h1>Movie Madness</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          searchMovies(searchItem);
        }}
        className="search"
      >
        <input
          placeholder="search movie"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchItem)}
        />
      </form>{" "}
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
