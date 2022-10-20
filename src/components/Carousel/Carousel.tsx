import { useEffect } from 'react';
import {
	Alert,
	AlertIcon,
	AlertTitle,
	Box,
	Center,
	Container,
	Heading,
	Spinner,
} from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { setList, toggleTemperatureUnits } from '../../store/slices/days';
import { getWeatherData } from '../../services/weatherService/weatherServices';
import { Card } from '../Card';

import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.css';

const Carousel = () => {
	const dispatch = useAppDispatch();
	const { weatherData, days } = useAppSelector((state) => state);

	// TODO CUSTOM HOOK
	const LoadListDays = async () => {
		const weatherListDays = await getWeatherData();
		dispatch(setList(weatherListDays));
		if (weatherData.temperatureUnits === 'Fahrenheit') {
			dispatch(toggleTemperatureUnits(weatherData.temperatureUnits));
		}
	};

	useEffect(() => {
		LoadListDays();
	}, []);

	return (
		<>
			{days.list.length > 0 ? (
				<Box marginTop={8}>
					<Heading textTransform={'capitalize'}>{weatherData.cityName}</Heading>
					<Container marginTop={4}>
						<Swiper
							slidesPerView={3}
							slidesPerGroup={1}
							spaceBetween={20}
							loop={true}
							loopFillGroupWithBlank={true}
							centeredSlides={true}
							grabCursor={true}
							navigation={true}
							modules={[Navigation]}
						>
							{days.list.map((day, index) => (
								<SwiperSlide key={index}>
									<Card day={day} />
								</SwiperSlide>
							))}
						</Swiper>
					</Container>
				</Box>
			) : (
				<Center h={'2xl'}>
					<Spinner size="xl" />
				</Center>
			)}
		</>
	);
};

export default Carousel;
