import { Radio, RadioGroup, Stack } from '@chakra-ui/react';

const TemperatureButtons = () => {
    return (
        <RadioGroup defaultValue='Celsius' justifySelf={'center'}>
            <Stack spacing={5} direction='row' >
                <Radio value='Celsius'>Celsius</Radio>
                <Radio value='Fahrenheit'>Fahrenheit</Radio>
            </Stack>
        </RadioGroup>
    );
};

export default TemperatureButtons;
