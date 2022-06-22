import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Mainpage from './Mainpage';
import NotFound from './NotFound';

const palette = {
	// red: '#E75244',
	// blue: '#367BBE',
	// purple: '#8491E0',
	// yellow: '#F9DE4B',
	// green: '#5DCB83',
	// white: '#ffffff',
	black: '#000000',
};

function App() {
	return (
		<BrowserRouter>
			<ThemeProvider theme={{ palette }}>
				<Routes>
					<Route
						path='/'
						element={<Mainpage />}
					/>
					<Route
						path='*'
						element={<NotFound />}
					/>
				</Routes>
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
