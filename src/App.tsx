import { useAppSelector } from './store/store';
import { getCod, getMessage } from './store/slices/weatherData/selectors';
import { ChakraProvider, Box, theme, Grid, Alert, AlertIcon, AlertTitle } from '@chakra-ui/react';
import { BarChart, Carousel, ColorModeSwitcher, SearchBar, TemperatureButtons } from './components';

import { appAlert, appAlertTitle } from './App.styles';

export const App = () => {
	const cod = useAppSelector(getCod);
	const message = useAppSelector(getMessage);
	return (
		<ChakraProvider theme={theme}>
			<Box textAlign="center" fontSize="xl">
				<Grid p={4}>
					<ColorModeSwitcher justifySelf="flex-end" />
					<TemperatureButtons />
					<SearchBar />
					{cod == 200 ? (
						<>
							<Carousel />
							<BarChart />
						</>
					) : (
						<Alert status="error" sx={appAlert}>
							<AlertIcon boxSize="40px" mr={0} />
							<AlertTitle sx={appAlertTitle}>{message}</AlertTitle>
						</Alert>
					)}
				</Grid>
			</Box>
		</ChakraProvider>
	);
};
