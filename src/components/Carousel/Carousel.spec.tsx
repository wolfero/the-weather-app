import { screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { render } from '../../test-utils';
import Carousel from './Carousel';

describe('Slider component test', () => {
	beforeAll(() => {
		render(
			<Provider store={store}>
				<Carousel />
			</Provider>
		);
	});

	it('should render successfully default city name', () => {
		expect(screen.getByText(/tunisia/i)).toBeInTheDocument();
	});
});
