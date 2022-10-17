import { Data } from '../store/types';

export const weatherDataMok: Data = {
	cod: '200',
	message: 0,
	cnt: 40,
	list: [
		{
			dt: 1665835200,
			main: {
				temp: 26.19,
				feels_like: 26.19,
				temp_min: 26.19,
				temp_max: 28.2,
				pressure: 1019,
				sea_level: 1019,
				grnd_level: 1016,
				humidity: 38,
				temp_kf: -2.01,
			},
			weather: [
				{
					id: 800,
					main: 'Clear',
					description: 'clear sky',
					icon: '01d',
				},
			],
			clouds: { all: 0 },
			wind: { speed: 2.55, deg: 256, gust: 2.91 },
			visibility: 10000,
			pop: 0,
			sys: { pod: 'd' },
			dt_txt: '2022-10-15 12:00:00',
		},
	],
	city: {
		id: 2464461,
		name: 'Tunisia',
		coord: { lat: 34, lon: 9 },
		country: 'TN',
		population: 10589025,
		timezone: 3600,
		sunrise: 1665811721,
		sunset: 1665852637,
	},
};
