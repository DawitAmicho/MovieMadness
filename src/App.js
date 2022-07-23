import React from 'react';
import { useEffect } from 'react';
import './app.css';
import SearchIcon from './search.svg';

//const Api_Url ='http://www.omdbapi.com?apikey=ac280c84';
const API='https://online-movie-database.p.rapidapi.com/auto-complete?'
const movie1={
	"Title": "Amazing Spiderman Syndrome",
	"Year" : "2012",
	"imdbID":"ss",
	"Type": "movie",
	"Poster":"N/A",
}
const App = () => {
	const searchMovies = async(title)=>{
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': '7ebbe9f787mshfd41c35f8b85186p120b05jsn7b008d1d0e78',
				'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
			}
		};
		
		//fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=all ', options)
			//.then(response => response.json())
			//.then(response => console.log(response))
			//.catch(err => console.error(err));
		const response = await fetch(`${API}&q=${title}`,options);
        const data = await response.json();
	     console.log(data);
		}

	useEffect(()=> {
		searchMovies('spiderman');

	},[]);
		return (
		<div className="app">
			<hl>Movie Madness</hl>
			<div className='search'>
				<input placeholder="search movie"
				value="spiderman"
				onChange={()=>{}}
				/>
				<img
				src={SearchIcon}
				alt="search"
				/>

			</div>

			<div className="container">
				<div className='movie'>
					<div>
						<p>{movie1.Year}</p>
					</div>
					<div>
						<img src= {movie1.Poster!== 'N/A' ?
						 movie1.poster :
						  'https://via.placeholder.com/400' } alt={movie1.title}/>

					</div>
				</div>

			</div>

		</div>


	);
}

export default App;
