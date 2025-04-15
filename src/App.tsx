import './App.css';
import { Route, Routes } from 'react-router';
import TenantsPage from './pages/TenantsPage/TenantsPage';
import ClubsPage from './pages/ClubsPage/ClubsPage';

function App() {

	return (
		<>
			<Routes>
				<Route path='/tenants' element={<TenantsPage/>}/>
				<Route path='/clubs' element={<ClubsPage/>}/>
			</Routes>			
		</>
	)
}

export default App
