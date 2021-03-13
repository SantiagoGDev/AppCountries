export class Paises{
	constructor() {
		this.dataPaises  = [];
		if(typeof Paises.instance === 'Object'){
			return Paises.instance;
		}
		Paises.instance = this;
		return this;
	}

	async getData(){
		try {
			const url = 'https://restcountries.eu/rest/v2/all';
			const data = await fetch(url).then(res => res.json())
			return data	
		} catch(err) {
			console.log(err);
		}
	}

	async getDataLocal(){
		try {
			const url = 'data/countries.json';
			const data = await fetch(url).then(res => res.json())
			return data	
		} catch(err) {
			console.log(err);
		}
	}

	async allPaises(){
		const data = await this.getData();
		const filtro = data.map( pais => {
			const {flag,name,population,region,capital} = pais;
			return {
				flag,name,population,region,capital
			}
		})
		return filtro;
	}

	async getCountry(name){
		const data = await this.getData();
		return data.filter(pais => pais.name === name)[0]
	}
}