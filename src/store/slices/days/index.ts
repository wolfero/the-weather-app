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
	},
});

export const { setListDays } = useDaysSlice.actions;

export default useDaysSlice.reducer;
