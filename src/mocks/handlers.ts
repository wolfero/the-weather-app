import { rest } from 'msw';
import { weatherDataMok } from './weatherDataMok';

const url = `https://api.openweathermap.org/data/2.5/forecast?q=tunisia&units=metric&appid=${process.env.REACT_APP_ACCESS_KEY}`;

export const handlers = [
	rest.get(url, (request, response, context) => {
		return response(context.json(weatherDataMok));
	}),
];
