import { createSlice } from '@reduxjs/toolkit';

export const useCitySlice = createSlice({
	name: 'city',
	initialState: {
		cod: 200,
		message: '',
		cityName: 'tunisia',
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
	},
});

export const { setCod, setMessage, setCityName } = useCitySlice.actions;

export default useCitySlice.reducer;
