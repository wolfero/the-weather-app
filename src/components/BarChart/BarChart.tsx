import Chart from 'react-apexcharts';
import { Container } from '@chakra-ui/react';
import { useAppSelector } from '../../store/store';
import { getDays } from '../../store/slices/days/selectors';

import { barChartContainer } from './BarChart.styles';

const BarChart = () => {
	const listDays = useAppSelector(getDays);
	const days = listDays.map((day) => {
		return new Date(day.dt * 1000).toLocaleDateString();
	});
	const temperature = listDays.map((day) => {
		return Math.round(day.main.temp);
	});
	const state = {
		options: {
			chart: {
				id: 'basic-bar',
			},
			xaxis: {
				categories: days,
			},
		},
		series: [
			{
				name: 'series-1',
				data: temperature,
			},
		],
	};

	return (
		<Container sx={barChartContainer}>
			<Chart options={state.options} series={state.series} type="bar" />
		</Container>
	);
};

export default BarChart;
