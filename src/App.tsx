import { ChakraProvider, Box, theme, Grid, Alert, AlertIcon, AlertTitle } from '@chakra-ui/react';
import { BarChart, Carousel, ColorModeSwitcher, SearchBar, TemperatureButtons } from './components';
import { useAppSelector } from './store/store';

export const App = () => {
	const weatherData = useAppSelector((state) => state.weatherData);
	return (
		<ChakraProvider theme={theme}>
			<Box textAlign="center" fontSize="xl">
				<Grid p={4}>
					<ColorModeSwitcher justifySelf="flex-end" />
					<TemperatureButtons />
					<SearchBar />
					{weatherData.cod == 200 ? (
						<>
							<Carousel />
							<BarChart />
						</>
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
								{weatherData.message}
							</AlertTitle>
						</Alert>
					)}
				</Grid>
			</Box>
		</ChakraProvider>
	);
};
