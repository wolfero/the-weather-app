import { Container, Input } from '@chakra-ui/react';
import { AxiosError } from 'axios';
import { ChangeEvent, KeyboardEvent } from 'react';
import { getWeatherData } from '../../services/weatherService/weatherServices';
import {
	resetWeatherDataStates,
	setCityName,
	setCod,
	setMessage,
} from '../../store/slices/weatherData';
import { setListDays, toggleTemperatureUnits } from '../../store/slices/days';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { Data } from '../../store/types';

const SearchBar = () => {
	const dispatch = useAppDispatch();
	const { temperatureUnits } = useAppSelector((state) => state.weatherData);
	const handleKeypress = async (event: KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			const cityName = event.currentTarget.value.toLowerCase();
			if (cityName !== '') {
				try {
					const listDays = await getWeatherData(cityName);
					dispatch(setCityName(cityName));
					dispatch(setListDays(listDays));

					if (temperatureUnits === 'Fahrenheit') {
						dispatch(toggleTemperatureUnits(temperatureUnits));
					}
					dispatch(setCod(200));
				} catch (error: any) {
					errorHandler(error);
				}
			}
		}
	};
	const errorHandler = (error: AxiosError) => {
		const errorData = error.response?.data as Data;
		dispatch(setCod(errorData.cod));
		dispatch(setMessage(errorData.message));
	};

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const cityName = event.currentTarget.value;
		if (cityName === '') {
			dispatch(resetWeatherDataStates());
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
