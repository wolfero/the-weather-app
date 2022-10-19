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
import { setListDays, toggleTemperatureUnits } from '../../store/slices/days';
import { getWeatherData } from '../../services/weatherService/weatherServices';
import { Card } from '../Card';

import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.css';

const Carousel = () => {
	const dispatch = useAppDispatch();
	const { cod, message, cityName, temperatureUnits } = useAppSelector(
		(state) => state.weatherData
	);
	const listDays = useAppSelector((state) => state.days.listDays);

	// TODO CUSTOM HOOK
	const LoadListDays = async () => {
		const weatherListDays = await getWeatherData();
		dispatch(setListDays(weatherListDays));
		if (temperatureUnits === 'Fahrenheit') {
			dispatch(toggleTemperatureUnits(temperatureUnits));
		}
	};

	useEffect(() => {
		LoadListDays();
	}, []);

	return (
		<>
			{cod === 200 ? (
				listDays.length > 0 ? (
					<Box marginTop={8}>
						<Heading textTransform={'capitalize'}>{cityName}</Heading>
						<Container marginTop={4} >
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
								{listDays.map((day, index) => (
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
				)
			) : (
				<Alert
					status="error"
					flexDirection="column"
					alignItems="center"
					justifyContent="center"
					textAlign="center"
					marginTop={8}
				>
					<AlertIcon boxSize="40px" mr={0} />
					<AlertTitle mt={4} mb={1} fontSize="lg" textTransform={'uppercase'}>
						{message}
					</AlertTitle>
				</Alert>
			)}
		</>
	);
};

export default Carousel;
