import axios from 'axios';
import { Data, Day } from '../../store/types';

const apiKey = process.env.REACT_APP_ACCESS_KEY;
const urlApi = 'https://api.openweathermap.org/data/2.5/forecast';
const units = 'metric';

export const getWeatherData = async (cityName = 'tunisia') => {
	const url = `${urlApi}?q=${cityName}&units=${units}&appid=${apiKey}`;
	const response = await axios.get(url);
	const data: Data = response.data;
	return filterDays(data.list);
};

const filterDays = (list: Day[]) => {
	const todayDate = new Date(list[0].dt * 1000);
	const newListDays = list.filter((day) => {
		const nextDate = new Date(day.dt * 1000);
		const isSameHour = todayDate.getHours() === nextDate.getHours();
		if (isSameHour) {
			return day;
		}
	});
	return newListDays;
};
