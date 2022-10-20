import Chart from 'react-apexcharts';
import { Container } from '@chakra-ui/react';
import { useAppSelector } from '../../store/store';

const BarChart = () => {
	const listDays = useAppSelector((state) => state.days.list);
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
		<Container mt={8} bg={'white'} color={'black'} justifyContent={'center'} border={'1px'}>
			<Chart options={state.options} series={state.series} type="bar" />
		</Container>
	);
};

export default BarChart;
