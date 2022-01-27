//getting API for showing all the data
import axios from 'axios';
import { trackPromise} from 'react-promise-tracker';


export const getFilms = category => (
	console.log(category),
    trackPromise(
	axios.get(`https://swapi.dev/api/films/`)
		.then(res => res.data, )
    )
);

export const getStarShips = category => (
	console.log(category),
    trackPromise(
	axios.get(`https://swapi.dev/api/starships/`)
		.then(res => res.data, )
    )
);

export const getPlanets = category => (
	console.log(category),
    trackPromise(
	axios.get(`https://swapi.dev/api/planets/`)
		.then(res => res.data, )
    )
);

export const getCharacters = category => (
	console.log(category),
    trackPromise(
	axios.get(`https://swapi.dev/api/people/`)
		.then(res => res.data, )
    )
);



