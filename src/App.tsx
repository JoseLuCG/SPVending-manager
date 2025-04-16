import './App.css';
import { Route, Routes } from 'react-router';
import TenantsPage from './pages/TenantsPage/TenantsPage';
import ClubsPage from './pages/ClubsPage/ClubsPage';
import MachinesPage from './pages/MachinesPage/MachinesPage';

function App() {

	return (
		<>
			<Routes>
				<Route path='/tenants' element={<TenantsPage/>}/>
				<Route path='/clubs' element={<ClubsPage/>}/>
				<Route path='/machines' element={<MachinesPage/>}/>
			</Routes>			
		</>
	)
}

export default App
