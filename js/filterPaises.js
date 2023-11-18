import {countryService} from './app.js';

export function filteredCountriesByRegion(region) {
	return new Promise((res, rej) => {
		countryService.findAll().then(response => {
			const filter = response.filter( country => country.region === region)
			res(filter)
		})
	});
}