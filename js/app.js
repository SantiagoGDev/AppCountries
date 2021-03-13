import {Paises} from './API.js';
import {renderCardsCountries} from './render.js';
import {filterPaises} from './filterPaises.js';
import {searchPaises} from './searchPaises.js';
import {renderCountry} from './renderCountry.js';
import {clearContent} from './clearContent.js';

export const paises = new Paises();
export const app = document.getElementById('app')
const formSearch = document.getElementById('search-form');

const loader = {
	element:document.querySelector('.loaders'),
	close(){
		this.element.classList.add('loaders--close');
	},
	open(){
		this.element.classList.remove('loaders--close');
	}
}

function getDataForm(form) {
	const campos = new FormData(form);
	const field = campos.get('search');
	const select = campos.get('region');
	return {
		field,select
	}
}

function actionsBtns(e) {
	const btn = e.target.classList[0];
	if(btn === 'info-country__btn-back') HomePage();
	if(btn === 'card-country__btn'){
		const pais = e.target.getAttribute('data-name-country');
		paises.getCountry(pais).then(res => {
			console.log(res);
			renderCountry(res)
		});
	}
	e.stopPropagation();
}

function HomePage() {
	clearContent(app);
	loader.open();
	paises.allPaises().then(res => {
		setTimeout(()=> {
			loader.close();
			renderCardsCountries(res)
		},2000)
	});
}

async function actionFormChanges(e) {
	const data = getDataForm(e.currentTarget);
	let render  = [];
	if(data.field === '') render = await paises.allPaises();
	if(data.select) render = await filterPaises(data.select)
	if(data.field) render = await searchPaises(data.field)
	renderCardsCountries(render)
}

document.addEventListener('DOMContentLoaded', HomePage)
formSearch.addEventListener('submit', e => e.preventDefault())
formSearch.addEventListener('change', actionFormChanges)
app.addEventListener('click', actionsBtns)

