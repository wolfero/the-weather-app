export interface Data {
	cod: string;
	message: number | string;
	cnt: number;
	list: Day[];
	city: City;
}

export interface Day {
	dt: number;
	main: MainData;
	weather: WeatherData[];
	clouds: CloudsData;
	wind: WindData;
	visibility: number;
	pop: number;
	sys: Sys;
	dt_txt: string;
}

export interface MainData {
	temp: number;
	feels_like: number;
	temp_min: number;
	temp_max: number;
	pressure: number;
	sea_level: number;
	grnd_level: number;
	humidity: number;
	temp_kf: number;
}

export interface WeatherData {
	id: number;
	main: string;
	description: string;
	icon: string;
}

export interface CloudsData {
	all: number;
}

export interface WindData {
	speed: number;
	deg: number;
	gust: number;
}

export interface Sys {
	pod: string;
}

export interface City {
	id: number;
	name: string;
	coord: CoordData;
	country: string;
	population: number;
	timezone: number;
	sunrise: number;
	sunset: number;
}

export interface CoordData {
	lat: number;
	lon: number;
}
