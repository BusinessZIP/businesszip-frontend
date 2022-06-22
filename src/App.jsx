import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainPage from './pages/MainPage';
import MyNameCard from './pages/MyNameCard';
import NotFound from './pages/NotFound';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import './styles/App.css';

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
					path='/mypage'
					element={<MyNameCard />}
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
