import React from 'react';
import { useEffect } from 'react';

//const Api_Url ='http://www.omdbapi.com?apikey=ac280c84';
const API='https://online-movie-database.p.rapidapi.com/auto-complete?'
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
		searchMovies('dave');

	},[]);
		return (
		<h2>helloo there </h2>

	);
}

export default App;
