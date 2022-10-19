import { createSlice } from '@reduxjs/toolkit';

export const useWeatherDataSlice = createSlice({
	name: 'city',
	initialState: {
		cod: 200,
		message: '',
		cityName: 'tunisia',
		temperatureUnits: 'Celsius',
	},
	reducers: {
		setCod: (state, action) => {
			state.cod = action.payload;
		},
		setMessage: (state, action) => {
			state.message = action.payload;
		},
		setCityName: (state, action) => {
			state.cityName = action.payload;
		},
		setTemperatureUnits: (state, action) => {
			state.temperatureUnits = action.payload;
		},
		resetWeatherDataStates: (state) => {
			state.cod = 200;
			state.message = '';
		},
	},
});

export const { setCod, setMessage, setCityName, setTemperatureUnits, resetWeatherDataStates } =
	useWeatherDataSlice.actions;

export default useWeatherDataSlice.reducer;
