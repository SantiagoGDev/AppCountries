import {paises} from './app.js';
export function filterPaises(region) {
	return new Promise((res, rej) => {
		paises.allPaises().then(response => {
			const filtro = response.filter( pais => pais.region === region)
			res(filtro)
		})
	});
}