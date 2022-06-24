import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { store } from './app/store';
import CreateCard from './pages/CreateCard';
import CreateDiyPage from './pages/CreateDiyPage';
import MainPage from './pages/MainPage';
import MyNameCard from './pages/MyNameCard';
import NameCard from './pages/NameCard';
import NotFound from './pages/NotFound';
import SearchPage from './pages/SearchPage';
import SelectCreateFormPage from './pages/SelectCreateFormPage';
import SelectDesignFormPage from './pages/SelectDesignFormPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import './styles/App.css';

function App() {
	return (
		<Provider store={store}>
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
						path='/search'
						element={<SearchPage />}
					/>
					<Route
						path='/selectCreate'
						element={<SelectCreateFormPage />}
					/>
					<Route
						path='/selectDesign'
						element={<SelectDesignFormPage />}
					/>
					<Route
						path='/create'
						element={<CreateCard />}
					/>
					<Route
						path='/shareCard/:id'
						element={<NameCard />}
					/>
					<Route
						path='/createDiy'
						element={<CreateDiyPage />}
					/>
					<Route
						path='*'
						element={<NotFound />}
					/>
				</Routes>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
