import {clearContent} from './clearContent.js';
import {app} from './app.js';
function formatNumber (n) {
	n = String(n).replace(/\D/g, "");
  	return n === '' ? n : Number(n).toLocaleString();
}

export function renderCardsCountries(data) {
	const fragment = document.createDocumentFragment();
	const template = document.getElementById('template-card-country').content
	data.forEach( country => {
		const clone = template.cloneNode(true);
		clone.querySelector('.card-country__flag').src = country.flags.svg;
		clone.querySelector('.card-country__title').innerText = country.name.common;
		clone.getElementById('country-population').querySelector('.card-country__value').innerText = formatNumber(country.population);
		clone.getElementById('country-region').querySelector('.card-country__value').innerText = country.region;
		clone.getElementById('country-capital').querySelector('.card-country__value').innerText = country.capital;
		clone.querySelector('.card-country__btn').setAttribute('data-name-country',country.name.common)
		fragment.appendChild(clone)
	});
	clearContent(app);
	app.appendChild(fragment)
}
