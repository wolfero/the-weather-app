import { getWeatherData } from './weatherServices';

describe('Weather Services', () => {
	it('should succeed in bringing the list of days', async () => {
		const listDays = await getWeatherData();

		expect(listDays.length).toEqual(5);
	});
});

