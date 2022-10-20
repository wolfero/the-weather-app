import useDaysSlice, { toggleTemperatureUnits } from '.';
import { weatherDataMok } from '../../../mocks/weatherDataMok';

describe('Slices day', () => {
	const initialState = {
		list: weatherDataMok.list,
	};

	it('should be change temperature units', () => {
		const switchUnits = toggleTemperatureUnits('Fahrenheit');
		const newState = useDaysSlice(initialState, switchUnits);

		const oldTemp = weatherDataMok.list[0].main.temp;
		const unitsFahrenheit = oldTemp + 32;

		expect(newState.list[0].main.temp).toEqual(unitsFahrenheit);
	});
});
