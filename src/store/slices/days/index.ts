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
		switchUnitsTemperature: (state, action) => {
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

export const { setListDays, switchUnitsTemperature } = useDaysSlice.actions;
export default useDaysSlice.reducer;
