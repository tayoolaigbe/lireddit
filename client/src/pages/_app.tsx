import { ThemeProvider, ColorModeProvider, CSSReset } from '@chakra-ui/react';
import React from 'react';
import { createClient, Provider } from 'urql';

const client = createClient({
	url: 'http://localhost:4000/graphql',
	fetchOptions: {
		credentials: 'include',
	},
});

import theme from '../theme';

function MyApp({ Component, pageProps }) {
	return (
		<Provider value={client}>
			<ThemeProvider theme={theme}>
				<ColorModeProvider
					options={{
						useSystemColorMode: true,
					}}
				>
					<CSSReset />
					<Component {...pageProps} />
				</ColorModeProvider>
			</ThemeProvider>
		</Provider>
	);
}

export default MyApp;
