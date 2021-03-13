import {clearContent} from './clearContent.js';
import {app} from './app.js';

export function renderCountry(data) {
	const fragment = document.createDocumentFragment();
	const article = document.createElement('article');
	article.className = 'info-country';
	article.innerHTML = contentCountry(data);
	fragment.appendChild(article)
	clearContent(app);
	app.appendChild(fragment);
}

function contentCountry(country) {
	return ` 
	<button class="info-country__btn-back btn">
		Back
	</button>
	<div class="info-country__align">
		<figure class="info-country__box">
			<img src="${country.flag}" alt="${country.name}">
		</figure>
		<div class="info-country__content">
			<h2 class="info-country__title">${country.name}</h2>
			<p class="info-country__text">
				<span class="info-country__property">
					NativeName :
				</span>
				<span class="info-country__value">
					${country.nativeName}
				</span>
			</p>
			<p class="info-country__text">
				<span class="info-country__property">
					Population :
				</span>
				<span class="info-country__value">
					${country.population}
				</span>
			</p>
			<p class="info-country__text">
				<span class="info-country__property">
					Region :
				</span>
				<span class="info-country__value">
					${country.region}
				</span>
			</p>
			<p class="info-country__text">
				<span class="info-country__property">
					Sub Region :
				</span>
				<span class="info-country__value">
					${country.subregion}
				</span>
			</p>
			<p class="info-country__text">
				<span class="info-country__property">
					Capital :
				</span>
				<span class="info-country__value">
					${country.capital}
				</span>
			</p>
			<p class="info-country__text">
				<span class="info-country__property">
					Top Level Domain:
				</span>
				<span class="info-country__value">
					${country.topLevelDomain[0]}
				</span>
			</p>
			<p class="info-country__text">
				<span class="info-country__property">
					Concurrencies:
				</span>
				<span class="info-country__value">
					${country.currencies[0].name}
				</span>
			</p>
			<p class="info-country__text">
				<span class="info-country__property">
					Languages:
				</span>
				<span class="info-country__value">
					${country.languages.map( el => el.name)}
				</span>
			</p>
			<p class="info-country__text">
				<span class="info-country__property">
					Border Countries:
				</span>
				<span class="info-country__value">
					${country.borders.map( el => el)}
				</span>
			</p>
		</div>
	</div>
	`;
}