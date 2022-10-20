import * as React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useColorMode, useColorModeValue, IconButton, IconButtonProps } from '@chakra-ui/react';

import { colorModeIconButton } from './ColorMode.styles';

type ColorModeSwitcherProps = Omit<IconButtonProps, 'aria-label'>;

const ColorModeSwitcher: React.FC<ColorModeSwitcherProps> = (props) => {
	const { toggleColorMode } = useColorMode();
	const text = useColorModeValue('dark', 'light');
	const SwitchIcon = useColorModeValue(FaMoon, FaSun);

	return (
		<IconButton
			variant="ghost"
			sx={colorModeIconButton}
			onClick={toggleColorMode}
			icon={<SwitchIcon />}
			aria-label={`Switch to ${text} mode`}
			{...props}
		/>
	);
};

export default ColorModeSwitcher;
