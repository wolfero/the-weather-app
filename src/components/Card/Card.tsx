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
				<Grid
					sx={cardGrid}
					templateAreas={`"description_1 value_1"
                        "description_2 value_2"
                        "description_3 value_3"
                        "description_4 value_4"`}
				>
					<GridItem area={'description_1'} textAlign={'left'}>
						Feels like:
					</GridItem>
					<GridItem area={'value_1'} textAlign={'right'}>
						{feelsLike}º
					</GridItem>
					<GridItem area={'description_2'} textAlign={'left'}>
						Wind:
					</GridItem>
					<GridItem area={'value_2'} textAlign={'right'}>
						{day.wind.speed} m/s
					</GridItem>
					<GridItem area={'description_3'} textAlign={'left'}>
						Humidity:
					</GridItem>
					<GridItem area={'value_3'} textAlign={'right'}>
						{day.main.humidity}%
					</GridItem>
					<GridItem area={'description_4'} textAlign={'left'}>
						Pressure:
					</GridItem>
					<GridItem area={'value_4'} textAlign={'right'}>
						{day.main.pressure} hPa
					</GridItem>
				</Grid>
			</HStack>
		</Box>
	);
};

export default Card;
