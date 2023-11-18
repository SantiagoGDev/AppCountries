import {countryService} from './app.js';

export function searchCountriesByTerm(value) {
	return new Promise((res, rej) => {
		let arraySearch = [];
		countryService.findAll().then(resp => {
			resp.map(country => {
				const name = country.name.common.toLowerCase();
				const search  = value.toLowerCase();
				if(name.indexOf(search) >= 0) arraySearch.push(country);
			});
			res(arraySearch);
		}).catch(err => {
			console.log(err);
			rej(err);
		});
	});
}