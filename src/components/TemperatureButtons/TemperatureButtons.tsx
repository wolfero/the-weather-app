import { FormEvent } from 'react';
import { Radio, RadioGroup, Stack } from '@chakra-ui/react';
import { useAppDispatch } from '../../store/store';
import { switchUnitsTemperature } from '../../store/slices/days';
import { setTemperatureUnits } from '../../store/slices/city';

const TemperatureButtons = () => {
	const dispatch = useAppDispatch();
	const handleChange = (event: FormEvent<HTMLInputElement>) => {
		const units = event.currentTarget.value;
		dispatch(setTemperatureUnits(units));
		dispatch(switchUnitsTemperature(units));
	};

	return (
		<RadioGroup defaultValue="Celsius" justifySelf={'center'}>
			<Stack spacing={5} direction="row">
				<Radio value="Celsius" onChange={handleChange}>
					Celsius
				</Radio>
				<Radio value="Fahrenheit" onChange={handleChange}>
					Fahrenheit
				</Radio>
			</Stack>
		</RadioGroup>
	);
};

export default TemperatureButtons;
