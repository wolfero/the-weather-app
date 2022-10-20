import { Day } from '../../types';
import { createSlice } from '@reduxjs/toolkit';

const updateTemperature = (day: Day, temperatureUnit: string) => {
	if (temperatureUnit === 'Celsius') {
		day.main.temp -= 32;
		day.main.feels_like -= 32;
	} else {
		day.main.temp += 32;
		day.main.feels_like += 32;
	}
};

export const useDaysSlice = createSlice({
	name: 'days',
	initialState: {
		list: [] as Day[],
	},
	reducers: {
		setList: (state, action) => {
			state.list = action.payload;
		},
		toggleTemperatureUnits: (state, action) => {
			for (const day of state.list) {
				updateTemperature(day, action.payload);
			}
		},
	},
});

export const { setList, toggleTemperatureUnits } = useDaysSlice.actions;
export default useDaysSlice.reducer;
