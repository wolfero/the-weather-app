import { Day } from '../../store/types';
import { Box, Grid, GridItem, HStack, Img, VStack } from '@chakra-ui/react';

import { cardBox, cardGrid } from './Card.styles';

const Card = ({ day }: { day: Day }) => {
	const iconUrl = `icons/${day.weather[0].icon}.png`;
	const date = new Date(day.dt * 1000).toLocaleDateString();
	const temperature = Math.round(day.main.temp);
	const feelsLike = Math.round(day.main.feels_like);

	return (
		<Box sx={cardBox}>
			<VStack justifyContent={'center'}>
				<Box fontSize={'2rem'}>{date}</Box>
				<Img src={iconUrl} />
				<Box fontSize={'2rem'}>{temperature}º</Box>
			</VStack>
			<HStack mt={4} justifyContent={'center'}>
				<Grid sx={cardGrid}>
					<GridItem textAlign={'left'}>Feels like:</GridItem>
					<GridItem textAlign={'right'}>{feelsLike}º</GridItem>
					<GridItem textAlign={'left'}>Wind:</GridItem>
					<GridItem textAlign={'right'}>{day.wind.speed} m/s</GridItem>
					<GridItem textAlign={'left'}>Humidity:</GridItem>
					<GridItem textAlign={'right'}>{day.main.humidity}%</GridItem>
					<GridItem textAlign={'left'}>Pressure:</GridItem>
					<GridItem textAlign={'right'}>{day.main.pressure} hPa</GridItem>
				</Grid>
			</HStack>
		</Box>
	);
};

export default Card;
