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
	console.log(country);
	return ` 
	<button class="info-country__btn-back btn">
		Back
	</button>
	<div class="info-country__align">
		<figure class="info-country__box">
			<img src="${country.flags.svg}" alt="${country.name.common}">
		</figure>
		<div class="info-country__content">
			<h2 class="info-country__title">${country.name.common}</h2>
			<p class="info-country__text">
				<span class="info-country__property">
					NativeName :
				</span>
				<span class="info-country__value">
					${country.name.official}
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
					Area :
				</span>
				<span class="info-country__value">
					${country.area}
				</span>
			</p>
			<p class="info-country__text">
				<span class="info-country__property">
					Concurrencies:
				</span>
				<span class="info-country__value">
					${ country.currencies[Object.keys(country.currencies)[0]].name}
				</span>
			</p>
			<p class="info-country__text">
				<span class="info-country__property">
					Languages:
				</span>
				<span class="info-country__value">
					${Object.values(country.languages)}
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