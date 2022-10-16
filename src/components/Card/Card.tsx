import { Box, Grid, GridItem, HStack, Img, VStack } from '@chakra-ui/react';
import { Day } from '../../store/types';

const Card = ({ day }: { day: Day }) => {
	const iconUrl = `icons/${day.weather[0].icon}.png`;
	const date = new Date(day.dt * 1000).toLocaleDateString();

	return (
		<Grid bg={'purple.500'} rounded={'md'} p={5}>
			<VStack justifySelf={'center'}>
				<Box fontSize={'2rem'}>{date}</Box>
				<Img src={iconUrl} />
				<Box fontSize={'2rem'}>{day.main.temp}ºC</Box>
			</VStack>
			<HStack mt={4} justifySelf={'center'}>
				<Grid
					templateAreas={`"title title"
                        "description_1 value_1"
                        "description_2 value_2"
                        "description_3 value_3"
                        "description_4 value_4"`}
					gridTemplateRows={'max-content'}
					gridTemplateColumns={'7rem'}
					fontSize={'1rem'}
				>
					<GridItem area={'description_1'} textAlign={'left'}>
						Feels like:
					</GridItem>
					<GridItem area={'value_1'} textAlign={'right'}>
						{day.main.feels_like} ºC
					</GridItem>
					<GridItem area={'description_2'} textAlign={'left'}>
						Wind:
					</GridItem>
					<GridItem area={'value_2'} textAlign={'right'}>
						{day.wind.speed}m/s
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
						{day.main.pressure}
					</GridItem>
				</Grid>
			</HStack>
		</Grid>
	);
};

export default Card;
