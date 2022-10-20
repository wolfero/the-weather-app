import {
	setCod,
	setMessage,
	setCityName,
	resetWeatherDataStates,
} from '../../store/slices/weatherData';
import { Data } from '../../store/types';
import { ChangeEvent, KeyboardEvent } from 'react';
import { Container, Input } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { setList, toggleTemperatureUnits } from '../../store/slices/days';
import { getWeatherData } from '../../services/weatherService/weatherServices';
import { getTemperatureUnits } from '../../store/slices/weatherData/selectors';

const SearchBar = () => {
	const dispatch = useAppDispatch();
	const temperatureUnits = useAppSelector(getTemperatureUnits);
	const LoadListDays = async (cityName = 'tunisia') => {
		try {
			const listDays = await getWeatherData(cityName);
			dispatch(setCityName(cityName));
			dispatch(setList(listDays));
			if (temperatureUnits === 'Fahrenheit') {
				dispatch(toggleTemperatureUnits(temperatureUnits));
			}
			dispatch(setCod(200));
		} catch (error: any) {
			const errorData = error.response?.data as Data;
			dispatch(setCod(errorData.cod));
			dispatch(setMessage(errorData.message));
		}
	};
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const cityName = event.currentTarget.value;
		if (cityName === '') {
			dispatch(resetWeatherDataStates());
		}
	};
	const handleKeypress = async (event: KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			const cityName = event.currentTarget.value;
			if (cityName !== '') {
				LoadListDays(cityName.toLowerCase());
			}
		}
	};

	return (
		<Container mt={8}>
			<Input
				pr="4.5rem"
				type="text"
				placeholder="Search city name"
				onKeyPress={handleKeypress}
				onChange={handleChange}
			/>
		</Container>
	);
};

export default SearchBar;
