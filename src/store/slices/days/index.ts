import { createSlice } from '@reduxjs/toolkit';
import { Day } from '../../types';

export const useDaysSlice = createSlice({
	name: 'days',
	initialState: {
		listDays: <Day[]>[],
	},
	reducers: {
		setListDays: (state, action) => {
			state.listDays = action.payload;
		},
		toggleTemperatureUnits: (state, action) => {
			for (const day of state.listDays) {
				if (action.payload === 'Celsius') {
					day.main.temp -= 32;
					day.main.feels_like -= 32;
				} else {
					day.main.temp += 32;
					day.main.feels_like += 32;
				}
			}
		},
	},
});

export const { setListDays, toggleTemperatureUnits } = useDaysSlice.actions;
export default useDaysSlice.reducer;
