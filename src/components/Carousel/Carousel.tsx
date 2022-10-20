import { Card } from '../Card';
import { useEffect } from 'react';
import { Navigation } from 'swiper';
import { Data } from '../../store/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { getDays } from '../../store/slices/days/selectors';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { setList, toggleTemperatureUnits } from '../../store/slices/days';
import { getWeatherData } from '../../services/weatherService/weatherServices';
import { setCod, setCityName, setMessage } from '../../store/slices/weatherData';
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
import {
	getCityName,
	getCod,
	getMessage,
	getTemperatureUnits,
} from '../../store/slices/weatherData/selectors';

import { appAlert, appAlertTitle } from '../../App.styles';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.css';

const Carousel = () => {
	const dispatch = useAppDispatch();
	const cod = useAppSelector(getCod);
	const message = useAppSelector(getMessage);
	const cityName = useAppSelector(getCityName);
	const temperatureUnits = useAppSelector(getTemperatureUnits);
	const days = useAppSelector(getDays);
	const LoadListDays = async (cityName = 'tunisia') => {
		try {
			const listDays = await getWeatherData(cityName);
			dispatch(setCityName(cityName));
			dispatch(setList(listDays));
			if (temperatureUnits === 'Fahrenheit') {
				dispatch(toggleTemperatureUnits(temperatureUnits));
			}
			dispatch(setCod(200));
		} catch (error: any) {
			const errorData = error.response?.data as Data;
			dispatch(setCod(errorData.cod));
			dispatch(setMessage(errorData.message));
		}
	};

	useEffect(() => {
		const isFirstLoad = days.length === 0;
		if (isFirstLoad) {
			LoadListDays();
		}
	}, []);

	return (
		<>
			{cod == 200 ? (
				days.length > 0 ? (
					<Box marginTop={8}>
						<Heading textTransform={'capitalize'}>{cityName}</Heading>
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
								{days.map((day, index) => (
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
				<Alert status="error" sx={appAlert}>
					<AlertIcon boxSize="40px" mr={0} />
					<AlertTitle sx={appAlertTitle}>{message}</AlertTitle>
				</Alert>
			)}
		</>
	);
};

export default Carousel;
