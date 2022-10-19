import { ChakraProvider, Box, theme, Grid } from '@chakra-ui/react';
import { Carousel, ColorModeSwitcher, SearchBar, TemperatureButtons } from './components';

export const App = () => (
	<ChakraProvider theme={theme}>
		<Box textAlign="center" fontSize="xl">
			<Grid p={4}>
				<ColorModeSwitcher justifySelf="flex-end" />
				<TemperatureButtons />
				<SearchBar />
				<Carousel />
			</Grid>
		</Box>
	</ChakraProvider>
);
