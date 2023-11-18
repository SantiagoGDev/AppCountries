export class CountryService{

	constructor(local = false) {
		this.countries  = [];
		this.local = local;
		if(typeof CountryService.instance === 'Object'){
			return CountryService.instance;
		}
		CountryService.instance = this;
		return this;
	}

	async findData(){
		try {
			const url = 'https://restcountries.com/v3.1/all';
			const data = await fetch(url).then(res => res.json());
			console.log(data);
			this.countries = data;
			return data;
		} catch(err) {
			console.log(err);
		}
	}

	async findLocalData(){
		try {
			const url = 'data/countries.json';
			const data = await fetch(url).then(res => res.json());
			this.countries = data;
			return data	
		} catch(err) {
			console.log(err);
		}
	}

	async findAll(){
		if(this.countries.length > 0){
			return this.countries;
		}else{
			return  this.local ?  await this.findLocalData() :  await this.findData();
		}
		return data;
	}

	async findCountryByName(name){
		const filtered =  this.countries.filter(country => country.name.common === name);
		return filtered[0];
	}
}