import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NotFound from './NotFound';
import MainPage from './pages/MainPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={<MainPage />}
				/>
				<Route
					path='/signIn'
					element={<SignInPage />}
				/>
				<Route
					path='/signUp'
					element={<SignUpPage />}
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
