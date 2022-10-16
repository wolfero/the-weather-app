import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ColorModeScript } from '@chakra-ui/react';

import { App } from './App';
import { store } from './store/store';

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<ColorModeScript />
			<App />
		</Provider>
	</React.StrictMode>
);
