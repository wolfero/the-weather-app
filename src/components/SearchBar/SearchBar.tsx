import { Container, Input } from '@chakra-ui/react';
import { AxiosError } from 'axios';
import { KeyboardEvent } from 'react';
import { getWeatherData } from '../../services/weatherService/weatherServices';
import { setCityName, setCod, setMessage } from '../../store/slices/weatherData';
import { setListDays, toggleTemperatureUnits } from '../../store/slices/days';
import { useAppDispatch, useAppSelector } from '../../store/store';

const SearchBar = () => {
	const dispatch = useAppDispatch();
	const temperatureUnits = useAppSelector((state) => state.weatherData.temperatureUnits);
	const handleKeypress = async (event: KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			const cityName = event.currentTarget.value.toLowerCase();
			if (cityName !== '') {
				event.currentTarget.value = '';
				try {
					const listDays = await getWeatherData(cityName);
					dispatch(setCityName(cityName));
					dispatch(setListDays(listDays));

					if (temperatureUnits === 'Fahrenheit') {
						dispatch(toggleTemperatureUnits(temperatureUnits));
					}
					dispatch(setCod(200));
				} catch (error) {
					errorHandler(error);
				}
			}
		}
	};
	const errorHandler = (error: unknown) => {
		if (error instanceof AxiosError) {
			const errorData = error.response?.data;
			dispatch(setCod(errorData.cod));
			dispatch(setMessage(errorData.message));
		}
	};

	// ? maybe create onchange handler to load default weather data when search bar is empty

	return (
		<Container mt={8}>
			<Input
				pr="4.5rem"
				type="text"
				placeholder="Search city name"
				onKeyPress={handleKeypress}
			/>
		</Container>
	);
};

export default SearchBar;
