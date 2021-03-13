import {paises} from './app.js';
export function searchPaises(value) {
	return new Promise((res, rej) => {
		let arraySearch = [];
		paises.allPaises().then(response => {
			response.map(pais => {
				const name = pais.name.toLowerCase();
				const search  = value.toLowerCase();
				if(name.indexOf(search) >= 0) arraySearch.push(pais);
			});
			res(arraySearch);
		})
	});
}