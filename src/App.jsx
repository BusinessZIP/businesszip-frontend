import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './styles/App.css';
import MainPage from './pages/MainPage';
import NotFound from './pages/NotFound';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={<MainPage />}
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
