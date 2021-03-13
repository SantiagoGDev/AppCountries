import {clearContent} from './clearContent.js';
import {app} from './app.js';
function formatNumber (n) {
	n = String(n).replace(/\D/g, "");
  	return n === '' ? n : Number(n).toLocaleString();
}

export function renderCardsCountries(data) {
	const fragment = document.createDocumentFragment();
	const template = document.getElementById('template-card-country').content
	data.forEach( pais => {
		const clone = template.cloneNode(true);
		clone.querySelector('.card-country__flag').src = pais.flag;
		clone.querySelector('.card-country__title').innerText = pais.name;
		clone.getElementById('country-population').querySelector('.card-country__value').innerText = formatNumber(pais.population);
		clone.getElementById('country-region').querySelector('.card-country__value').innerText = pais.region;
		clone.getElementById('country-capital').querySelector('.card-country__value').innerText = pais.capital;
		clone.querySelector('.card-country__btn').setAttribute('data-name-country',pais.name)
		fragment.appendChild(clone)
	});
	clearContent(app);
	app.appendChild(fragment)
}
