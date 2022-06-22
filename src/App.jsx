import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Mainpage from './Mainpage';
import NotFound from './NotFound';

function App() {
	return (
		<BrowserRouter>
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
		</BrowserRouter>
	);
}

export default App;
